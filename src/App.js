import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dictaphone from "./components/dictaPhone";
import TextToSpeech from "./components/textToSpeech";
import { useSpeech } from "react-text-to-speech";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicAnimation from "./components/micAnimation/micAnimation";

function App() {
  const [text, setText] = useState("");

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
  } = useSpeechRecognition();

  return (
    <div className="App">
      <h3>text: {text}</h3>
      <MicAnimation isMicActive={listening} />
      <Dictaphone
        {...{
          setText,
          transcript,
          listening,
          resetTranscript,
          browserSupportsSpeechRecognition,
          SpeechRecognition,
        }}
      />
      <TextToSpeech
        {...{
          transcript,
          Text,
          speechStatus,
          isInQueue,
          start,
          pause,
          stop,
        }}
      />
    </div>
  );
}

export default App;
