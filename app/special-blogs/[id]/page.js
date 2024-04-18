import axios from "axios";
import { getBlogImg } from "@/app/utils/getPopulateUtils";
import { cookies } from "next/headers";
import DetailBlog from "@/app/components/DetailBlog";

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
    <>
      <DetailBlog blog={blog} />
    </>
  );
}

export default Page;
