"use client";

import { useMemo } from "react";

type RecorderControlsProps = {
  isRecording: boolean;
  onToggleRecording: () => void;
};

export function RecorderControls({
  isRecording,
  onToggleRecording
}: RecorderControlsProps) {
  const buttonLabel = isRecording ? "Stop Recording" : "Start Recording";
  const buttonStyles = useMemo(
    () =>
      isRecording
        ? "bg-rose-600 hover:bg-rose-700 focus-visible:outline-rose-600"
        : "bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600",
    [isRecording]
  );

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onToggleRecording}
        className={`rounded-lg px-6 py-3 text-base font-semibold text-white shadow transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonStyles}`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
