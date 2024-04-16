import axios from "axios";
import Link from "next/link";

const fetchBlogDetail = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs/${id}?populate=*`
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

async function Page({ params }) {
  const blogId = params.id
  const blog = await fetchBlogDetail(blogId);

  return (
    <div>
      <h2>{blog.attributes.title}</h2>
      <p>{blog.attributes.description}</p>
    </div>
  );
}

export default Page;
