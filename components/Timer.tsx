import Image from "next/image";
import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

interface Timeprops {
  expiryTimestamp: Date;
  handleNext: () => void;
  QIndex: number;
}

function MyTimer({ expiryTimestamp, handleNext, QIndex }: Timeprops) {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: () => {
      console.warn("onExpire called");
      handleNext();
      // Restarts to 5 minutes timer
      const time = new Date();
      time.setSeconds(time.getSeconds() + 30);
      restart(time);
    },
  });

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 30);
    restart(time);
  }, [QIndex]);

  return (
    <div className="flex items-center">
      <Image width={25} height={25} src={"/images/timer.svg"} alt="timer" />
      <span className="ml-2">{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}

export default MyTimer;
