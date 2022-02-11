import { useState } from "react";
import Card from "./shared/Card";
function FeedbackForm() {
  const [text, setText] = useState();
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Card>
        <form>
          <h2>How Would You Rate Your Service With Us?</h2>
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write your review"
              value={text}
            />
          </div>
        </form>
      </Card>
    </div>
  );
}

export default FeedbackForm;
