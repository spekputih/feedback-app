import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
  // const [rating, setRating] = useState(0);
  // const [text, setText] = useState("This is an example of feedback item");
  // const handleClick = function () {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default FeedbackItem;
