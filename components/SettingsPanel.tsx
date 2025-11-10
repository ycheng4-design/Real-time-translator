"use client";

type SettingsPanelProps = {
  preferredLanguage: string;
  onPreferredLanguageChange: (value: string) => void;
  audioFirst: boolean;
  onAudioFirstChange: (value: boolean) => void;
};

const LANGUAGE_OPTIONS = [
  { label: "English", value: "English" },
  { label: "Chinese", value: "Chinese" },
  { label: "Spanish", value: "Spanish" }
];

export function SettingsPanel({
  preferredLanguage,
  onPreferredLanguageChange,
  audioFirst,
  onAudioFirstChange
}: SettingsPanelProps) {
  return (
    <section className="w-full max-w-sm">
      <h2 className="mb-3 text-lg font-semibold text-slate-800">Settings</h2>
      <div className="space-y-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Preferred Language
          <select
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={preferredLanguage}
            onChange={(event) => onPreferredLanguageChange(event.target.value)}
          >
            {LANGUAGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center justify-between gap-3 text-sm font-medium text-slate-700">
          <span>Audio-first mode</span>
          <input
            type="checkbox"
            className="h-5 w-5 rounded border border-slate-300 text-indigo-600 focus:ring-indigo-500"
            checked={audioFirst}
            onChange={(event) => onAudioFirstChange(event.target.checked)}
          />
        </label>
      </div>
    </section>
  );
}
