import { useState } from "react";
import { TFeedbackItem } from "../lib/types";
import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackItem = ({
  upvoteCount,
  badgeLetter,
  company,
  text,
  daysAgo,
}: TFeedbackItem) => {
  const [open, setOpen] = useState(false);
  const [upvotedCount, setUpvotedCount] = useState(upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvotedCount((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen((prev) => !prev)}
      className={`feedback ${open ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvotedCount}</span>
      </button>
      <div>
        <p>{badgeLetter}</p>
      </div>
      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo === 0 ? "NEW" : `${daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
