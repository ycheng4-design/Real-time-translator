"use client";

type Props = {
  preferredLanguage: string;
  onPreferredLanguageChange: (value: string) => void;
  audioFirst: boolean;
  onAudioFirstChange: (value: boolean) => void;
};

export default function SettingsPanel({
  preferredLanguage,
  onPreferredLanguageChange,
  audioFirst,
  onAudioFirstChange,
}: Props) {
  return (
    <div className="mt-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-3">
      <h2 className="text-sm font-semibold text-slate-100">Settings</h2>

      <div className="flex flex-col gap-2 text-xs text-slate-300">
        <label className="flex flex-col gap-1">
          <span>Preferred language (for displayed translations)</span>
          <select
            value={preferredLanguage}
            onChange={(e) => onPreferredLanguageChange(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
          >
            <option value="English">English</option>
            <option value="Chinese">Chinese</option>
            <option value="Spanish">Spanish</option>
            <option value="Japanese">Japanese</option>
          </select>
        </label>

        <label className="inline-flex items-center gap-2 mt-1">
          <input
            type="checkbox"
            checked={audioFirst}
            onChange={(e) => onAudioFirstChange(e.target.checked)}
            className="w-3 h-3"
          />
          <span>Audio-first mode (prioritize spoken output)</span>
        </label>
      </div>
    </div>
  );
}

