import React, { useCallback, useContext, useRef } from "react";
import { QuizContext } from "../pages/_app";
import { ContextTypeParams } from "../types";
import { toPng } from "html-to-image";
import { useRouter } from "next/router";
import oops from "../public/images/oops2.jpg";
import { BsTwitter } from "react-icons/bs";
import pssdLogo from "../public/images/pssdLogo.svg";
import { FaUserAlt } from "react-icons/fa";
import ngmi from "../public/images/ngmi.gif";
import { motion } from "framer-motion";
import Image from "next/image";

const GameOver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const route = useRouter();
  const {
    Score,
    RandomQuestions,
    setGameMenu,
    Username,
    setUsername,
    setRandomQuestions,
    setQIndex,
    setScore,
  } = useContext(QuizContext) as ContextTypeParams;

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const onRestart = () => {
    setGameMenu("start");
    setRandomQuestions([]);
    setScore(0);
    setQIndex(0);
    setUsername("");
    route.push("/");
  };

  return (
    <div className="border-black md:w-11/12 mx-auto md:pt-24 text-center">
      <div ref={ref} className="bg-wheat pt-24 pb-8 md:p-8">
        <h1 className="text-xl md:text-4xl my-3 font-semibold">
          You scored {Score} out of {RandomQuestions.length}!
        </h1>
        {Score > 3 ? (
          <h4 className="text-xl">Congratulations! :) You are a true #posse</h4>
        ) : (
          <h4 className="text-xl">Eeeshhh! {Username}, NGMI Fam</h4>
        )}

        <div className="pt-12 lg:w-3/5 w-4/5 mx-auto">
          {Score > 3 ? (
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360, transition: { duration: 1 } }}
              className="rounded-lg border border-black shadow bg-pink-300 p-2 px-4"
            >
              <div className="flex items-center border-y border-black">
                <div className="w-1/4 bg-black rounded-2xl flex justify-center p-2 py-4 mr-2">
                  {/* <Image src={pssdLogo} alt="ts logo" /> */}
                  <FaUserAlt className="text-gray-400 h-10 w-10" />
                </div>
                <div className="my-3 md:my-6 w-3/4">
                  <h3 className="font-semibold text-xl my-2 border-b border-black p-1">
                    {Username}
                  </h3>

                  <h3 className="text-lg font-semibold  my-2 border-b border-black p-1">
                    POTENTIAL TEST SUBJECT
                  </h3>
                </div>
              </div>
              <div className="h-8 bg-black my-2"></div>
            </motion.div>
          ) : (
            <div>
              <Image src={ngmi} alt="try again" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <button className="gameOverBtn" onClick={onButtonClick}>
          download card
        </button>

        <a
          className="twitter-share-button gameOverBtn flex items-center"
          target={Username ? "_blank" : "_self"}
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?text=I%20scored%20${Score}%20out%20of%20${
            RandomQuestions.length
          }%20in%20%23posse%20trivia%20${"https://pssssdtrivia.com/"}`}
          data-size="large"
        >
          Tweet
          <span>
            <BsTwitter className="text-white w-8 ml-1" />
          </span>
        </a>
        <button className="gameOverBtn" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default GameOver;
