import { getBlogImg } from "@/app/utils/getPopulateUtils";
import Author from "@/app/components/Author";

function DetailBlog({ blog, author = null }) {
  return (
    <div className="max-w-[900px] mx-auto bg-white my-8 rounded-md py-12 px-6 shadow-md flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 gap-y-2">
        <h1 className="text-3xl font-semibold text-center">
          {blog.attributes.title}
        </h1>
        {author && <Author authorData={blog.attributes.author.data} createAt={blog.attributes.createdAt} />}
      </div>
      <img src={getBlogImg(blog)} alt="blog-img" />
      <p className="mt-6 indent-8">{blog.attributes.detail}</p>
    </div>
  );
}

export default DetailBlog;
