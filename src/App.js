import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dictaphone from "./components/dictaPhone";
import TextToSpeech from "./components/textToSpeech";
import { useSpeech } from "react-text-to-speech";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicAnimation from "./components/micAnimation/micAnimation";
import { HiMiniSpeakerWave } from "react-icons/hi2";

function App() {
  const [text, setText] = useState(null);

  const { Text, speechStatus, isInQueue, start, pause, stop } = useSpeech({
    text,
    pitch: 1,
    rate: 1,
    volume: 1,
    lang: "hi-IN",
    voiceURI: "Google हिन्दी",
    autoPlay: false,
    highlightText: false,
    showOnlyHighlightedText: false,
    highlightMode: "word",
  });

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    finalTranscript,
  } = useSpeechRecognition();

  console.log({ speechStatus, finalTranscript, text, listening });

  const startMic = () => {
    SpeechRecognition.startListening();
  };

  useEffect(() => {
    if (listening) {
      console.log(listening);
    }
  }, [listening]);

  useEffect(() => {
    if (finalTranscript) {
      setText(finalTranscript);
    }
  }, [finalTranscript]);

  useEffect(() => {
    if (!listening && text && speechStatus !== "started") {
      start();
    }
  }, [listening, text, speechStatus]);

  useEffect(() => {
    if (speechStatus === "stopped" && text) {
      setText("");
    }
  }, [speechStatus]);

  return (
    <div className="App">
      {speechStatus === "started" ? (
        <HiMiniSpeakerWave className="text-lg" />
      ) : (
        <>
          <MicAnimation
            startMic={startMic}
            isMicActive={listening}
            speechStatus={speechStatus}
          />
          <Dictaphone
            {...{
              setText,
              finalTranscript,
              listening,
              resetTranscript,
              browserSupportsSpeechRecognition,
              SpeechRecognition,
            }}
          />
          {/* <TextToSpeech
            {...{
              finalTranscript,
              Text,
              speechStatus,
              isInQueue,
              start,
              pause,
              stop,
            }}
          /> */}
        </>
      )}
      {text === null && <h3>No speech found! Try expressing yourself...</h3>}{" "}
      {text && <h3>Speech: {text}</h3>}
      {text === "" && <h3>Nice, wanna try again!</h3>}
    </div>
  );
}

export default App;
