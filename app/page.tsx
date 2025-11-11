"use client";

import { useState } from "react";
import RecorderControls from "@/components/RecorderControls";
import TranscriptArea from "@/components/TranscriptArea";
import SettingsPanel from "@/components/SettingsPanel";

export default function HomePage() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("English");
  const [audioFirst, setAudioFirst] = useState(false);
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleToggleRecording = () => {
    // TODO: integrate real audio recording + ASR
    setIsRecording((prev) => !prev);
  };

  // Keep your mock for now so you can see UI move
  const handleMockAppend = () => {
    setTranscript((prev) =>
      prev
        ? prev + "\n[Demo] New recognized speech segment..."
        : "[Demo] Listening... recognized speech will appear here."
    );
  };

  const handleTranslate = async () => {
    setLoading(true);
    setErrorMsg("");
    setTranslatedText("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: transcript,
          targetLanguage: preferredLanguage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Request failed");
      }

      setTranslatedText(data.translated || "");
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Translation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center py-10">
      <div className="w-full max-w-3xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">
            Accessible Real-Time Translator
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Prototype interface for language-aware, accessibility-first live translation.
          </p>
        </header>

        <section className="space-y-5">
          <RecorderControls
            isRecording={isRecording}
            onToggleRecording={handleToggleRecording}
            onMockAppend={handleMockAppend}
          />

          <TranscriptArea transcript={transcript} />

          <button
            onClick={handleTranslate}
            disabled={loading || !transcript}
            className="mt-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-xs font-medium disabled:opacity-40"
          >
            {loading ? "Translating..." : "Translate Transcript"}
          </button>

          {errorMsg && (
            <p className="text-xs text-red-400 mt-1">{errorMsg}</p>
          )}

          {translatedText && (
            <div className="mt-3">
              <h2 className="text-sm font-medium text-slate-200 mb-1">
                Translated Output
              </h2>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2 text-xs whitespace-pre-wrap">
                {translatedText}
              </div>
            </div>
          )}

          <SettingsPanel
            preferredLanguage={preferredLanguage}
            onPreferredLanguageChange={setPreferredLanguage}
            audioFirst={audioFirst}
            onAudioFirstChange={setAudioFirst}
          />
        </section>
      </div>
    </main>
  );
}
