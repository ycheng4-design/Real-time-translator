"use client";

type Props = {
  transcript: string;
};

export default function TranscriptArea({ transcript }: Props) {
  return (
    <div className="mt-4">
      <h2 className="text-sm font-medium text-slate-200 mb-2">
        Live Transcript
      </h2>
      <div className="h-40 w-full rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs overflow-y-auto whitespace-pre-wrap">
        {transcript || (
          <span className="text-slate-500">
            Your recognized speech will appear here.
          </span>
        )}
      </div>
    </div>
  );
}
