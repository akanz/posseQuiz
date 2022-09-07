import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { GenerateRandomNumbers } from "../hooks/GenRandom";
import ob from "../public/images/ob.svg";
import ob2 from "../public/images/ob2.svg";
import styles from "../styles/Home.module.css";
import { ContextTypeParams } from "../types";
import { QuizContext } from "./_app";

const Home: NextPage = () => {
  const { setUsername, Username } = useContext(
    QuizContext
  ) as ContextTypeParams;
  const randomQ = GenerateRandomNumbers();
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   setRandomQuestions(randomQ);
  // }, []);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="relative h-screen">
      <Head>
        <title>Yin Yang trivia | Test your #yin yang knowledge </title>
      </Head>

      <header className="lg:h-1/3 h-1/4 lg:w-3/5 lg:absolute top-0">
      </header>
      <section className="lg:pt-28 absolute w-screen z-10">
        <div className="header w-11/12 text-center md:w-3/5 lg:w-1/2 mx-auto">
          <h1 className="text-2xl md:text-4xl text-brown font-extrabold">
            <span className="text-yyangYellow">#Yin Yang</span>
            <span className="text-yyangRed"> TRIVIA</span>
          </h1>
          <h2 className="text-center text-2xl md:text-4xl text-gray-600 font-bold my-3">
            BY
          </h2>
          <div className="flex justify-end">
            <h2 className="text-4xl md:text-7xl font-bold text-yyangYellow">YIN YANG
              <span className="text-yyangRed"> DEV</span></h2>
            {/* <Image
              // layout="fill"
              width={400}
              height={100}
              src={"/images/possesseddev.svg"}
              alt="possessed dev"
            /> */}
          </div>
          <div className="text-xl py-4 text-center">
            See how much you know about the Yin Yang Community
          </div>
          <div className="p-2 flex justify-center">
            <input
              ref={inputRef}
              className="bg-transparent text-center outline-none focus:border-red-500 focus:border-4 w-4/5 p-2 text-lg"
              type="text"
              value={Username}
              onChange={handleInput}
              placeholder="Enter your twitter username"
            />
          </div>
          <div className="flex justify-center pt-4 items-center">
            {Username !== "" && (
              <Link href="/play" passHref>
                <motion.a
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="bg-gradient-to-b from-lightgreen to-darkgreen text-white font-bold text-3xl py-3 px-8 rounded-xl shadow-xl"
                >
                  START
                  {/* <Image
                    src={"/images/Button_start.svg"}
                    alt="start button"
                    width={200}
                    height={100}
                  /> */}
                </motion.a>
              </Link>
            )}
          </div>
        </div>
      </section>
      <footer
        // style={{
        //   backgroundImage: `url('/images/ob2.svg')`,
        // }}
        className="lg:h-2/3 h-1/4 absolute bottom-0 w-screen"
      >
      </footer>
    </div>
  );
};

export default Home;
