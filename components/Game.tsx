import React, { useContext, useEffect, useState } from "react";
import Options from "../components/Options";
import MyTimer from "../components/Timer";
import { BiLoaderCircle } from "react-icons/bi";
import { QuizContext } from "../pages/_app";
import { ContextTypeParams, questionParams } from "../types";
import { questions, time } from "../constants/questions";

const Game = () => {
  const [answer, setanswer] = useState("");
  const [disable, setdisable] = useState<boolean>(false);
  const [Select, setSelect] = useState(false);

  const {
    Score,
    setScore,
    RandomQuestions,
    setGameMenu,
    QIndex,
    setQIndex,
    Question,
    setQuestion,
  } = useContext(QuizContext) as ContextTypeParams;

  const handlePickAnswer = (ans: any) => {
    setanswer(ans);
    setdisable(true);
    if (ans.answer) {
      setScore(Score + 1);
    }
  };

  const handleNext = () => {
    setSelect(false);
    setdisable(false);
    if (QIndex < RandomQuestions.length - 1) {
      setQIndex(QIndex + 1);
    } else {
      setGameMenu("over");
    }
  };

  console.log(disable)
//   console.log(Question);

  return (
    <div className="flex w-full pt-24 lg:pt-0 items-center">
      {Question && (
        <div className="border-4 border-black w-11/12 lg:w-3/5 mx-auto">
          <header className="bg-black text-white flex items-center justify-between p-2 px-4">
            <div>
              Question {QIndex + 1}/{RandomQuestions.length}
            </div>
         
            <MyTimer
              expiryTimestamp={time}
              handleNext={handleNext}
              QIndex={QIndex}
            />
          </header>
          <main className="p-4">
            <div className="mb-8 font-semibold text-lg tracking-wide">
              {Question?.title}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Question?.options?.map((item: string, index: number) => (
                <Options
                  key={index}
                  handleAnswer={handlePickAnswer}
                  answer={answer}
                  item={item}
                  Select={Select}
                  setSelect={setSelect}
                  disable={disable}
                />
              ))}
            </div>
          </main>
          <div className="flex justify-end p-5">
            {QIndex < RandomQuestions.length - 1 ? (
              <>
                <button
                  //   disabled={disable}
                  onClick={handleNext}
                  className="gameBtn"
                >
                  SKIP
                </button>
                <button
                  //   disabled={disable}
                  onClick={handleNext}
                  className="gameBtn"
                >
                  NEXT
                </button>
              </>
            ) : (
              <>
                <button
                  //   disabled={disable}
                  onClick={handleNext}
                  className="gameBtn"
                >
                  FINISH
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {!Question && (
        <div className="border-4 border-black w-11/12 md:w-3/5 mx-auto flex items-center justify-center p-6">
          <BiLoaderCircle className="text-3xl animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Game;
