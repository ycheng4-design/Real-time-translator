"use client";

type TranscriptAreaProps = {
  transcript: string;
};

export function TranscriptArea({ transcript }: TranscriptAreaProps) {
  return (
    <section className="flex-1">
      <h2 className="mb-3 text-lg font-semibold text-slate-800">Transcript</h2>
      <div className="h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-inner">
        {transcript || <span className="text-slate-400">Waiting for speech input...</span>}
      </div>
    </section>
  );
}
