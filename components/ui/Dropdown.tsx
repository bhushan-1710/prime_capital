'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useId,
  useCallback,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  label?: string;
  name: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
}

export default function Dropdown({
  label,
  name,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  required = false,
  className = '',
  id: customId,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<'bottom' | 'top'>('bottom');
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const autoId = useId();
  const dropdownId = customId || autoId;
  const listboxId = `${dropdownId}-listbox`;

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const typeaheadTimerRef = useRef<NodeJS.Timeout | null>(null);
  const typeaheadBufferRef = useRef<string>('');

  const shouldReduceMotion = useReducedMotion();

  // Find currently selected option object
  const selectedOption = options.find((opt) => opt.value === value);

  // Compute flip placement before opening
  const updatePlacement = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - rect.bottom;
    const spaceAbove = rect.top;

    // Menu height is at most 260px (max-h-64 = 256px + padding)
    if (spaceBelow < 260 && spaceAbove > spaceBelow) {
      setPlacement('top');
    } else {
      setPlacement('bottom');
    }
  }, []);

  const openMenu = () => {
    updatePlacement();
    setIsOpen(true);
    const selectedIdx = options.findIndex((opt) => opt.value === value);
    setActiveIndex(selectedIdx >= 0 ? selectedIdx : 0);
  };

  const closeMenu = (returnFocus = true) => {
    setIsOpen(false);
    setActiveIndex(-1);
    typeaheadBufferRef.current = '';
    if (returnFocus && triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    closeMenu(true);
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (!containerRef.current || containerRef.current.contains(e.target as Node)) {
        return;
      }
      closeMenu(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  // Scroll active option into view when activeIndex changes
  useEffect(() => {
    if (!isOpen || activeIndex < 0 || !listboxRef.current) return;
    const activeItem = listboxRef.current.children[activeIndex] as HTMLElement | undefined;
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, activeIndex]);

  // Type-ahead helper
  const handleTypeahead = (char: string) => {
    if (typeaheadTimerRef.current) {
      clearTimeout(typeaheadTimerRef.current);
    }

    typeaheadBufferRef.current += char.toLowerCase();

    typeaheadTimerRef.current = setTimeout(() => {
      typeaheadBufferRef.current = '';
    }, 500);

    const searchStr = typeaheadBufferRef.current;
    const startIndex = (activeIndex + 1) % options.length;

    // Search from next item to end, then from 0 to current
    const orderedIndices = [
      ...Array.from({ length: options.length - startIndex }, (_, i) => startIndex + i),
      ...Array.from({ length: startIndex }, (_, i) => i),
    ];

    const matchIndex = orderedIndices.find((idx) =>
      options[idx].label.toLowerCase().startsWith(searchStr)
    );

    if (matchIndex !== undefined) {
      setActiveIndex(matchIndex);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Tab') {
      if (isOpen) {
        closeMenu(false);
      }
      return;
    }

    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown': {
        e.preventDefault();
        setActiveIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;
      }
      case 'Home': {
        e.preventDefault();
        setActiveIndex(0);
        break;
      }
      case 'End': {
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      }
      case 'Enter':
      case ' ': {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options.length) {
          handleSelect(options[activeIndex].value);
        }
        break;
      }
      case 'Escape': {
        e.preventDefault();
        closeMenu(true);
        break;
      }
      default: {
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault();
          handleTypeahead(e.key);
        }
        break;
      }
    }
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for standard HTML form submission */}
      <input type="hidden" name={name} value={value} required={required} />

      {/* Trigger button */}
      <button
        ref={triggerRef}
        id={dropdownId}
        type="button"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-label={label || placeholder}
        aria-activedescendant={
          isOpen && activeIndex >= 0 ? `${dropdownId}-opt-${activeIndex}` : undefined
        }
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        className={`w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border text-sm text-left flex items-center justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 ${
          isOpen
            ? 'border-[var(--accent-blue)] ring-2 ring-[var(--accent-blue)]/20'
            : 'border-[var(--border-hairline)] hover:border-gray-300'
        }`}
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <span
          className={`truncate select-none ${
            selectedOption && selectedOption.value !== ''
              ? 'text-[var(--text-heading)] font-medium'
              : 'text-gray-400'
          }`}
        >
          {selectedOption && selectedOption.value !== ''
            ? selectedOption.label
            : placeholder}
        </span>

        {/* Chevron icon */}
        <span
          className={`shrink-0 ml-2 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--accent-blue)]' : ''
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            aria-label={label || placeholder}
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : placement === 'bottom' ? -4 : 4,
              scale: shouldReduceMotion ? 1 : 0.99,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : placement === 'bottom' ? -4 : 4,
              scale: shouldReduceMotion ? 1 : 0.99,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.15,
              ease: 'easeOut',
            }}
            className={`absolute left-0 right-0 w-full z-50 rounded-2xl bg-white border border-[var(--border-hairline)] shadow-xl max-h-64 overflow-y-auto p-1.5 focus:outline-none ${
              placement === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2'
            }`}
            style={{
              boxShadow:
                '0 12px 36px -4px rgba(35, 39, 66, 0.12), 0 4px 14px -2px rgba(35, 39, 66, 0.06)',
            }}
          >
            {options.map((option, idx) => {
              const isSelected = option.value === value;
              const isActive = idx === activeIndex;

              return (
                <li
                  key={option.value || `opt-empty-${idx}`}
                  id={`${dropdownId}-opt-${idx}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`relative flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer select-none text-sm transition-colors ${
                    isSelected
                      ? 'bg-[var(--accent-blue)]/10 text-[var(--text-heading)] font-semibold'
                      : isActive
                      ? 'bg-[var(--accent-blue)]/8 text-[var(--text-heading)] font-medium'
                      : 'text-[var(--text-heading)] hover:bg-gray-50'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span className="truncate">{option.label}</span>

                  {isSelected && (
                    <span className="shrink-0 ml-2 text-[var(--accent-blue)]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
