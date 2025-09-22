import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { IPost } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`);
  const { data: blogs } = await res.json();

  return blogs?.slice(0, 10)?.map((blog: IPost) => ({
    blogId: String(blog.id),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
  const blog = await res.json();

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogId}`);
  const blog = await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">Blog Details</h2>
      <BlogDetailsCard blog={blog} />
    </div>
  );
}
