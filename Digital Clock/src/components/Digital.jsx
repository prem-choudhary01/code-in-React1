import { useState } from "react";
function Clock() {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return(
  <>
  <h1 className="time"> Digital Clock1</h1>
<h1 className="time">{ctime}</h1>;
  </> 
  )
}

export default Clock;
