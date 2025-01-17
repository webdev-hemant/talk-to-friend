import React, { useEffect } from "react";

const Dictaphone = ({
  setText,
  finalTranscript,
  listening,
  resetTranscript,
  browserSupportsSpeechRecognition,
  SpeechRecognition,
}) => {
  // useEffect(() => {
  //   if (finalTranscript) {
  //     setText(finalTranscript);
  //   }
  // }, [finalTranscript]);

  //   useEffect(() => {
  //     if (listening) {
  //     //   setText("");
  //     } else {
  //       setTimeout(() => SpeechRecognition.startListening(), 500);
  //     }
  //   }, [listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      {/* <h1>Listening: {listening ? "True" : "False"}</h1> */}
      {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
      {/* <button onClick={SpeechRecognition.startListening}>Start</button> */}
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}
      {/* <p>{finalTranscript}</p> */}
    </div>
  );
};
export default Dictaphone;
