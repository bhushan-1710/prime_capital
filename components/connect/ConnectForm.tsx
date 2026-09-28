'use client';
import React, { useState } from 'react';
import Dropdown, { type DropdownOption } from '@/components/ui/Dropdown';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  company: string;
  email: string;
  discussion: string;
  location: string;
  sector: string;
}

const SECTOR_OPTIONS: DropdownOption[] = [
  { value: '', label: 'Select focus area...' },
  { value: 'Real Estate', label: 'Real Estate' },
  { value: 'Golf & Experiential', label: 'Golf & Experiential' },
  { value: 'Mining & Sustainable', label: 'Mining & Sustainable' },
  { value: 'Data Centres', label: 'Data Centres' },
  { value: 'Islamic Finance', label: 'Islamic Finance / Bridging' },
  { value: 'General Advisory', label: 'Strategic Advisory' },
];

export default function ConnectForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    discussion: '',
    location: '',
    sector: '',
  });
  const [formState, setFormState] = useState<FormState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      // Simulate submission delay
      await new Promise((r) => setTimeout(r, 1000));
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  if (formState === 'success') {
    return (
      <div className="py-12 text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-2">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-heading)]">Thank you.</h3>
        <p className="sky-body text-base max-w-md mx-auto text-[var(--text-body)]">
          Thank you. Your enquiry has been received. A partner will review your confidential brief and establish next steps.
        </p>
        <button
          type="button"
          onClick={() => {
            setFormData({
              name: '',
              company: '',
              email: '',
              discussion: '',
              location: '',
              sector: '',
            });
            setFormState('idle');
          }}
          className="sky-btn-primary mt-4"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {formState === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs">
          We could not submit this enquiry. Please try again or contact us by email.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)] text-sm text-[var(--text-heading)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">
            Company / Organisation *
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Company or Family Office"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)] text-sm text-[var(--text-heading)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="confidential@domain.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)] text-sm text-[var(--text-heading)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">
            Location <span className="font-normal text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="e.g. London / Edinburgh / Dubai"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)] text-sm text-[var(--text-heading)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="sector-select"
          className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2"
        >
          Asset / Sector <span className="font-normal text-gray-400">(Optional)</span>
        </label>
        <Dropdown
          id="sector-select"
          name="sector"
          label="Asset / Sector (optional)"
          placeholder="Select focus area..."
          options={SECTOR_OPTIONS}
          value={formData.sector}
          onChange={(val) => setFormData((prev) => ({ ...prev, sector: val }))}
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-body)] mb-2">
          What are you looking to discuss? *
        </label>
        <textarea
          name="discussion"
          required
          rows={5}
          placeholder="Briefly describe the opportunity, asset, timing or capital parameters..."
          value={formData.discussion}
          onChange={handleChange}
          className="w-full px-4 py-3.5 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-hairline)] text-sm text-[var(--text-heading)] placeholder:text-gray-400 focus:outline-none focus:border-[var(--accent-blue)] transition-colors resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[var(--text-body)]/80">
          Protected by strict discretion. Unregulated introducer.
        </p>
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="sky-btn-primary w-full sm:w-auto"
        >
          <span>{formState === 'submitting' ? 'Submitting...' : 'Send Enquiry'}</span>
          <span>→</span>
        </button>
      </div>
    </form>
  );
}
