import Image from "next/image";
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { NextPage } from "next";

import { questions, time } from "../constants/questions";
import Pssd from "../public/images/pssd1.gif";
import Pssd2 from "../public/images/pssd2.gif";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import { ContextTypeParams } from "../types";
import { QuizContext } from "./_app";
import Game from "../components/Game";
import GameOver from "../components/GameOver";
import { GenerateRandomNumbers } from "../hooks/GenRandom";

const Play: NextPage = () => {
  const {
    GameMenu,
    setRandomQuestions,
    setQuestion,
    QIndex,
    RandomQuestions,
    Question,
    Username,
  } = useContext(QuizContext) as ContextTypeParams;
  const randomQ = GenerateRandomNumbers();
  const router = useRouter();

  useEffect(() => {
    setRandomQuestions(randomQ);
  }, []);

  useEffect(() => {
    if (Username === "") {
      router.push("/");
    }
  }, [Username, router]);

  useEffect(() => {
    setQuestion(questions[RandomQuestions[QIndex]]);
  }, [QIndex, RandomQuestions]);

  return (
    <Layout img={GameMenu == "start" ? Pssd : Pssd2}>
      {GameMenu == "start" ? <Game /> : <GameOver />}
    </Layout>
  );
};

export default Play;
