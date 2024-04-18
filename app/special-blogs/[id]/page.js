import Author from "@/app/components/Author";
import axios from "axios";
import Link from "next/link";
import { getBlogImg } from "@/app/utils/getPopulateUtils";
import { cookies } from "next/headers";

const fetchBlogDetail = async (id) => {
  try {
    const token = cookies().get("token");
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/special-blogs/${id}?populate=thumbnail,author`,
      { headers: { Authorization: `Bearer ${token.value}` } }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

async function Page({ params }) {
  const blogId = params.id;
  const blog = await fetchBlogDetail(blogId);

  return (
    <div>
      specia blogs
      <h1>{blog.attributes.title}</h1>
      {/* <Author authorData={blog.attributes.author.data} /> */}
      <img src={getBlogImg(blog)} alt="blog-img" />
      <p>{blog.attributes.description}</p>
    </div>
  );
}

export default Page;
