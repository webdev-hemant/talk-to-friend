import React, { useEffect } from "react";
import { useSpeech } from "react-text-to-speech";

const TextToSpeech = ({
  transcript,
  Text,
  speechStatus,
  isInQueue,
  start,
  pause,
  stop,
}) => {

  useEffect(() => {
    if (transcript) {
      start();
    }
  }, [transcript]);

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      {/* <Text /> */}
      <div style={{ display: "flex", columnGap: "0.5rem" }}>
        {speechStatus !== "started" ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={pause}>Pause</button>
        )}
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
