function FeedbackStats({ feedback }) {
  // calculate rating average
  let average =
    feedback.reduce((accumulator, currentArray) => {
      return accumulator + currentArray.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  console.log(average);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
