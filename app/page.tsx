"use client";

import { useMemo, useState } from "react";
import { RecorderControls } from "../components/RecorderControls";
import { SettingsPanel } from "../components/SettingsPanel";
import { TranscriptArea } from "../components/TranscriptArea";

const MOCK_TRANSCRIPT_SEGMENTS = [
  "Initializing microphone and preparing to transcribe...",
  "Hello everyone, welcome to the Accessible Real-Time Translator demo.",
  "This mock transcript shows how your audio will appear in real time.",
  "In future iterations we will stream real audio data from the backend."
];

export default function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [audioFirst, setAudioFirst] = useState(true);
  const [transcriptIndex, setTranscriptIndex] = useState(0);

  const transcript = useMemo(() => MOCK_TRANSCRIPT_SEGMENTS[transcriptIndex], [transcriptIndex]);

  const handleToggleRecording = () => {
    setIsRecording((prev) => !prev);
    setTranscriptIndex((prev) => (prev + 1) % MOCK_TRANSCRIPT_SEGMENTS.length);

    // TODO: Integrate with Web Speech API / backend streaming service.
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="flex w-full max-w-5xl flex-col gap-10 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-12">
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Accessible Real-Time Translator
          </h1>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Real-time speech transcription with accessibility-first controls.
          </p>
        </header>

        <section className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-1 flex-col gap-6">
            <RecorderControls isRecording={isRecording} onToggleRecording={handleToggleRecording} />
            <TranscriptArea transcript={transcript} />
          </div>

          <div className="flex flex-col gap-6">
            <SettingsPanel
              preferredLanguage={preferredLanguage}
              onPreferredLanguageChange={setPreferredLanguage}
              audioFirst={audioFirst}
              onAudioFirstChange={setAudioFirst}
            />
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-medium text-slate-700">Session summary</p>
              <ul className="mt-2 space-y-1">
                <li>Preferred language: {preferredLanguage}</li>
                <li>Audio-first: {audioFirst ? "On" : "Off"}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
