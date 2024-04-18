import Author from "@/app/components/Author";
import axios from "axios";
import { getBlogImg } from "@/app/utils/getPopulateUtils";
import DetailBlog from "@/app/components/DetailBlog";

const fetchBlogDetail = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs/${id}?populate=thumbnail,author.profile`
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
    <>
      <DetailBlog blog={blog} author />
    </>
  );
}

export default Page;
