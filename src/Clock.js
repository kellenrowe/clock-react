import React, { useEffect, useState } from "react";
import "./Clock.css";

/** Clock Component
 * 
 *  Props: NONE
 * 
 *  State:
 *    - time -> object { seconds: "", minutes: "", hours: "" }
 *    - hands -> object { seconds: "", minutes: "", hours: "" }
 * 
 *  App -> Clock
 */
function Clock() {
  const [time, setTime] = useState({
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  });
  const [hands, setHands] = useState({});

  useEffect(() => {
    function updateHandAngles() {
      setHands({
        seconds: (time.seconds / 60) * 360 + 90,
        minutes: (time.minutes / 60) * 360 + 90,
        hours: (time.hours / 12) * 360 + 90,
      })
    }
    updateHandAngles();
  }, [time]);

  function tick() {
    const now = new Date();
    setTime({
      seconds: now.getSeconds(),
      minutes: now.getMinutes(),
      hours: now.getHours(),
    })
  }

  setInterval(tick, 1000);

  let transitionTime = hands.seconds === 90
    ? "none"
    : "all .05s cubic-bezier(0.37, 3.02, 0.25, 1)";

  return (
    <div className="Clock">
      <div className="clockFace">
        <div
          style={{
            transform: `rotate(${hands.seconds}deg)`,
            transition: transitionTime }}
          className="secHand hand">
        </div>
        <div
          style={{ transform: `rotate(${hands.minutes}deg)`,
          transition: transitionTime }}
          className="minHand hand">
        </div>
        <div
          style={{ transform: `rotate(${hands.hours}deg)`,
          transition: transitionTime }}
          className="hourHand hand">
        </div>
      </div>
    </div>
  )
}

export default Clock;