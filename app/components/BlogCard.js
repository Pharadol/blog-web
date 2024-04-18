import Link from "next/link";
import { getBlogImg } from "../utils/getPopulateUtils";
import Author from "./Author";

function BlogCard({ blog, specialBlog }) {
  const to = `/${specialBlog ? 'special-blogs' : 'blog'}/${blog.id}`
  return (
    <article className="bg-white rounded-md shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
      <Link href={to}>
        <img className="rounded-t-md object-cover w-full" src={getBlogImg(blog)} alt="blog-img" />
        <div className="p-4 pb-8">
          {!specialBlog && (
            <Author
              authorData={blog.attributes.author.data}
              createAt={blog.attributes.createdAt}
              card
            />
          )}
          <h2 className="text-2xl font-semibold">{blog.attributes.title}</h2>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
