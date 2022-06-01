import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { ContextTypeParams, questionParams } from "../types";

export const QuizContext = createContext<ContextTypeParams | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [Username, setUsername] = useState<string>("");
  const [Score, setScore] = useState<number>(0);
  const [RandomQuestions, setRandomQuestions] = useState<Array<number>>([]);
  const [GameMenu, setGameMenu] = useState("start");
  const [QIndex, setQIndex] = useState<number>(0);
  const [Question, setQuestion] = useState<string | questionParams | any>(null);

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
      <Component {...pageProps} />
    </QuizContext.Provider>
  );
}

export default MyApp;
