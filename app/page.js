import axios from "axios";
import Link from "next/link";
import Author from "./components/Author";

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
  console.log(blog);

  return (
    <div className="max-w-[900px] mx-auto px-3">
      <h1 className="text-3xl mb-12 mt-5 font-semibold">Next Strapi Blog</h1>

      <div className="flex flex-col gap-y-6">
        {blog.map((item) => {
          return (
            <article
              key={item.id}
              className="bg-white rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Link href={`/blog/${item.id}`}>
                <img
                  className="rounded-t-md"
                  src={`${process.env.STRAPI_BASE_URL}${item.attributes.thumbnail.data.attributes.url}`}
                  alt=""
                />
                <div className="p-4 pb-8">
                  <Author authorData={item.attributes.author.data} />
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
