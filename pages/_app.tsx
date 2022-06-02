import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useRef, useState } from "react";
import { ContextTypeParams, questionParams } from "../types";

export const QuizContext = createContext<ContextTypeParams | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [Username, setUsername] = useState<string>("");
  const [Score, setScore] = useState<number>(0);
  const [RandomQuestions, setRandomQuestions] = useState<Array<number>>([]);
  const [GameMenu, setGameMenu] = useState("start");
  const [QIndex, setQIndex] = useState<number>(0);
  const [Question, setQuestion] = useState<string | questionParams | any>(null);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return (
    <QuizContext.Provider
      value={{
        Username,
        setUsername,
        Score,
        setScore,
        RandomQuestions,
        setRandomQuestions,
        GameMenu,
        setGameMenu,
        Question,
        setQuestion,
        QIndex,
        setQIndex,
      }}
    >
      <audio ref={audioRef} id="audio" loop muted={false}>
        <source src="/audio/psssd.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Component {...pageProps} />
    </QuizContext.Provider>
  );
}

export default MyApp;
