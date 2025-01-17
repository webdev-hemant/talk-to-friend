import React, { useEffect } from "react";
import { useSpeech } from "react-text-to-speech";

const TextToSpeech = ({
  finalTranscript,
  Text,
  speechStatus,
  isInQueue,
  start,
  pause,
  stop,
}) => {
  // console.log({ finalTranscript, speechStatus });

  // useEffect(() => {
  //   if (finalTranscript && speechStatus !== "started") {
  //     start();
  //   }
  // }, [finalTranscript]);

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
