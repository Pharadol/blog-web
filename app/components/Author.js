import { getAuthorProfile } from "../utils/getPopulateUtils";
import { formatDate } from "../utils/formatDataUtils";
function Author({ authorData, createAt, card }) {
  const author = authorData;

  return (
    <div className="flex items-center py-2 text-gray-500 text-sm">
      <img
        className="w-10 rounded-full mr-3"
        src={getAuthorProfile(author)}
        alt="author-img"
      />
      <div className={`flex ${card ? 'flex-row items-center' : 'flex-col'}`}>
        <span className="text-gray-600 text-base">{author.attributes.name}</span>
        {
          card &&
          <span className="text-xs text-gray-300 dark:text-gray-600 mx-2">•</span>
        }
        <span>{formatDate(createAt)}</span>
      </div>
    </div>
  );
}

export default Author;
