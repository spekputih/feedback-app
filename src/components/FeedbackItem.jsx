import { useState } from "react";

function FeedbackItem() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("This is an example of feedback item");
  // const handleClick = function () {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
}

export default FeedbackItem;
