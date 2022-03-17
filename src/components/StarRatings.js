import StarRatings from "react-star-ratings";

const StarRating = ({ voteAverage }) => {
  return (
    <StarRatings
      rating={voteAverage}
      starRatedColor="orange"
      starDimension="1.5rem"
      starSpacing="0rem"
    />
  );
};

export default StarRating;
