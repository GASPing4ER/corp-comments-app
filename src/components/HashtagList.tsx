import { useFeedbackItemStore } from "../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const companyList = useFeedbackItemStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
