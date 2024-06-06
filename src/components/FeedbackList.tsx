import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { useFeedbackItemStore } from "../stores/feedbackItemsStore";

const FeedbackList = () => {
  const isLoading = useFeedbackItemStore((state) => state.isLoading);
  const errorMessages = useFeedbackItemStore((state) => state.errorMessage);
  const filteredFeedbackItems = useFeedbackItemStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessages && <ErrorMessage message={errorMessages} />}
      {filteredFeedbackItems.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          id={feedback.id}
          upvoteCount={feedback.upvoteCount}
          badgeLetter={feedback.badgeLetter}
          company={feedback.company}
          text={feedback.text}
          daysAgo={feedback.daysAgo}
        />
      ))}
    </ol>
  );
};

export default FeedbackList;
