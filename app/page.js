import axios from "axios";
import BlogCard from "./components/BlogCard";

const fetchBlogs = async () => {
  try {
    const res = await axios.get(
      `${process.env.STRAPI_BASE_URL}/api/blogs?populate=thumbnail,author.profile`
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
      <h1 className="text-3xl mb-7 mt-5 font-semibold">Blog</h1>
      <div className="flex flex-col gap-y-6">
        {blog.map((item) => {
          return (
            <BlogCard key={ item.id } blog={item} />
          );
        })}
      </div>
    </div>
  );
}
