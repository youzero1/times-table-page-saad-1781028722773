import clsx from 'clsx';

type TimesTableCardProps = {
  multiplier: number;
  result: number;
  highlighted: boolean;
  onClick: () => void;
};

export default function TimesTableCard({
  multiplier,
  result,
  highlighted,
  onClick,
}: TimesTableCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full rounded-2xl px-6 py-5 flex items-center justify-between shadow transition-all duration-200 focus:outline-none',
        highlighted
          ? 'bg-primary text-white scale-105 shadow-lg ring-2 ring-primary'
          : 'bg-white text-gray-800 hover:bg-primary/10 hover:scale-105'
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={clsx(
            'flex items-center justify-center w-10 h-10 rounded-full text-lg font-bold',
            highlighted ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
          )}
        >
          {multiplier}
        </span>
        <span className="text-base font-semibold">
          12 × {multiplier}
        </span>
      </div>
      <span
        className={clsx(
          'text-2xl font-extrabold',
          highlighted ? 'text-white' : 'text-primary'
        )}
      >
        {result}
      </span>
    </button>
  );
}
