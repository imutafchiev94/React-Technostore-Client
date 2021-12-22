import ReviewCard from "./ReviewCard/ReviewCard";

const ReviewList = ({ reviews }) => {
  return (
    <div className="col-sm-12">
      {reviews.length > 0 ? (
        reviews.map((x) => <ReviewCard key={x._id} review={x} />)
      ) : (
        <div style={{margin: '5%'}}>
          <p>There has no Reviews yet.</p>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
