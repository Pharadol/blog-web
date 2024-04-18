import axios from "axios";
import Link from "next/link";
import Author from "../components/Author";
import { getBlogImg } from "../utils/getPopulateUtils";
import { cookies } from "next/headers";

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
    <div className="max-w-[900px] mx-auto px-3">
      <h1 className="text-3xl mb-12 mt-5 font-semibold">Special Blog</h1>

      <div className="flex flex-col gap-y-6">
        {blog.map((item) => {
          return (
            <article
              key={item.id}
              className="bg-white rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href={`/special-blogs/${item.id}`}>
                <img
                  className="rounded-t-md"
                  src={getBlogImg(item)}
                  alt="blog-img"
                />
                <div className="p-4 pb-8">
                  {/* <Author authorData={item.attributes.author.data} /> */}
                  <h2 className="text-2xl font-semibold">
                    {item.attributes.title}
                  </h2>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
