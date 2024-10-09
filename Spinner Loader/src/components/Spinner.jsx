import { useEffect, useState } from "react";

const Spinner = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);
//   console.log("1")

  useEffect(() => {
    setShowImg(false);
    setTimeout(() => {
      setText("I waited for 3 seconds to be loaded");
    }, 3000);
  }, []);

  return (
    <>
      <div>
        {showImg ? (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS789NyUdpX3QENXM1a9d3367Dq5eU-EW_76A&s"
            alt="Spinner"
          />
        ) : (
          <h2>{text}</h2>
        )}
      </div>
    </>
  );
};

export default Spinner;
