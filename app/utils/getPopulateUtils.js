export const getBlogImg = (blog) => {
  return `${process.env.STRAPI_BASE_URL}${blog.attributes.thumbnail.data.attributes.url}`;
};

export const getAuthorProfile = (author) => {
  return `${process.env.STRAPI_BASE_URL}${author.attributes.profile.data.attributes.url}`;
};
