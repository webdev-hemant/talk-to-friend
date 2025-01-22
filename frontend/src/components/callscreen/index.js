import { useEffect, useState } from "react";
import Dictaphone from "../dictaPhone";
// import TextToSpeech from "./components/textToSpeech";
import { useSpeech } from "react-text-to-speech";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicAnimation from "../micAnimation/micAnimation";
import { HiMiniSpeakerWave } from "react-icons/hi2";
// import ChatGPTSocket from "./components/chatapp";

let SPEECH_TIMEOUT = null;

const CallScreen = () => {
  const [text, setText] = useState(null);
  const [speechHistory, setSpeechHistory] = useState([]);

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

  console.log({ speechStatus, finalTranscript, text, listening, speechHistory });

  const startMic = () => {
    SpeechRecognition.startListening();
  };

  useEffect(() => {
    if (SPEECH_TIMEOUT && speechStatus === "started") {
      clearTimeout(SPEECH_TIMEOUT);
    } else {
      // SPEECH_TIMEOUT = setTimeout(startMic, 1500);
    }
  }, [speechStatus, listening]);

  // useEffect(() => {
  //   if (listening) {
  //     console.log(listening);
  //   }
  // }, [listening]);

  useEffect(() => {
    if (finalTranscript) {
      setText(finalTranscript);
      setSpeechHistory((prev) => [...prev, finalTranscript]);
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
    <div>
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
        </>
      )}
      {text === null && <h3>No speech found! Try expressing yourself...</h3>}{" "}
      {/* {text && <h3>{text}</h3>} */}
      {text === "" && <h3>Nice, wanna try again!</h3>}
      <div>
        <ol>
          {speechHistory.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ol>
      </div>
      {/* <ChatGPTSocket /> */}
    </div>
  );
}

export default CallScreen;
