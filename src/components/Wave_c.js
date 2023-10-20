import React from "react";
import { useSelector } from "react-redux";
import Wave from "react-wavify";

function Wave_c() {

  const darkMode  = useSelector(state => state.dark)

  return (
    <>
      <div className="absolute bottom-0 w-full h-[420px] wavify">
        <Wave
          fill= {darkMode === 'dark' ? "#8f8f8f" : "#FAFEE5"}
          paused={false}
          options={{
            height: 30,
            amplitude: 10,
            speed: 0.3,
            points: 6,
          }}
        />
        {/* 맨뒤 */}
      </div>
      <div className="absolute bottom-0 w-full h-[360px] wavify">
        <Wave
          fill= {darkMode === 'dark' ? "#4f4f4f" : "#E2F9DC"}
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.3,
            points: 6,
          }}
        />
        {/* 중간 */}
      </div>
      <div className="absolute bottom-0 w-full h-[300px] wavify">
        <Wave
          fill= {darkMode === 'dark' ? "#292929" : "#C7E8CF"}
          paused={false}
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.3,
            points: 5,
          }}
        />
        {/* 맨앞 */}
      </div>
    </>
  );
}

export default Wave_c;
