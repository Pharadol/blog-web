
function Author({ authorData }) {
  const  author  = authorData;

  return (
    <div className="flex items-center py-2 text-gray-500 text-sm">
      <img
        className="w-8 rounded-full mr-3"
        src={`${process.env.STRAPI_BASE_URL}${author.attributes.profile.data.attributes.url}`}
        alt="author-img"
      />
      <span>{ author.attributes.name }</span>
    </div>
  );
}

export default Author;
