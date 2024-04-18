import { getAuthorProfile } from "../utils/getPopulateUtils";

function Author({ authorData }) {
  const  author  = authorData;

  return (
    <div className="flex items-center py-2 text-gray-500 text-sm">
      <img
        className="w-8 rounded-full mr-3"
        src={getAuthorProfile(author)}
        alt="author-img"
      />
      <span>{ author.attributes.name }</span>
    </div>
  );
}

export default Author;
