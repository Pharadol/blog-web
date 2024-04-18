import axios from "axios";
import { cookies } from "next/headers";
import BlogCard from "../components/BlogCard";

const fetchBlogs = async () => {
  try {
    const token = cookies().get("token");
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/special-blogs?populate=thumbnail,author.profile`,
      { headers: { Authorization: `Bearer ${token.value}` } }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Home() {
  const blog = await fetchBlogs();

  return (
    <div className="max-w-[900px] mx-auto px-3 mb-12">
      <h1 className="text-3xl mb-12 mt-5 font-semibold">Special Blog</h1>

      <div className="flex flex-col gap-y-6">
        {blog.map((item) => {
          return <BlogCard key={item.id} blog={item} specialBlog />;
        })}
      </div>
    </div>
  );
}
