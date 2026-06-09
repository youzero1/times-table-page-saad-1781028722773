import { useState } from 'react';
import TimesTableCard from '@/components/TimesTableCard';
import clsx from 'clsx';

export default function TimesTablePage() {
  const [highlight, setHighlight] = useState<number | null>(null);

  const rows = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-3xl font-bold mb-4 shadow-lg">
          12
        </div>
        <h1 className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
          12 Times Table
        </h1>
        <p className="text-gray-500 text-base">
          Tap a card to highlight it!
        </p>
      </div>

      {/* Table Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {rows.map((n) => (
          <TimesTableCard
            key={n}
            multiplier={n}
            result={12 * n}
            highlighted={highlight === n}
            onClick={() => setHighlight(highlight === n ? null : n)}
          />
        ))}
      </div>

      {/* Summary Banner */}
      <div className="mt-10 w-full max-w-2xl bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-bold text-primary mb-4 text-center">Quick Reference</h2>
        <div className="grid grid-cols-2 gap-2">
          {rows.map((n) => (
            <div
              key={n}
              className={clsx(
                'flex justify-between items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer',
                highlight === n
                  ? 'bg-primary text-white'
                  : 'bg-bg text-gray-700 hover:bg-primary/10'
              )}
              onClick={() => setHighlight(highlight === n ? null : n)}
            >
              <span>12 × {n}</span>
              <span className="font-bold">{12 * n}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-gray-400 text-xs">
        © {new Date().getFullYear()} 12 Times Table
      </footer>
    </div>
  );
}
