import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 10,
    title: "Getting Started with Next.js",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    view: 14,
    authorId: 1,
    createdAt: "2025-09-22T05:15:54.620Z",
    updatedAt: "2025-09-22T06:29:44.985Z",
  },
  {
    id: 11,
    title: "Getting Started with Next.js App",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    view: 7,
    authorId: 1,
    createdAt: "2025-09-22T05:22:17.793Z",
    updatedAt: "2025-09-22T11:10:01.621Z",
  },
  {
    id: 12,
    title: "Getting Started with React.js App",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router..js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Nextjs", "Redux", "Zod"],
    view: 0,
    authorId: 1,
    createdAt: "2025-09-22T11:42:23.632Z",
    updatedAt: "2025-09-22T11:42:23.632Z",
  },
  {
    id: 13,
    title: "Getting Started with Next.js App",
    content:
      "Next.js introduces new features for building fast and scalable web applications. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Nextjs", "Redux", "Zod"],
    view: 0,
    authorId: 1,
    createdAt: "2025-09-22T11:43:36.448Z",
    updatedAt: "2025-09-22T11:43:36.448Z",
  },
  {
    id: 14,
    title: "Getting Started with Prisma app",
    content:
      "Prisma introduces new features for building a fast and scalable web api. Learn how to set up your first project and explore its App Router.",
    thumbnail: "https://teamraft.com/wp-content/uploads/nextjs.jpg",
    isFeatured: true,
    tags: ["Prisma", "Postgres"],
    view: 0,
    authorId: 1,
    createdAt: "2025-09-22T11:51:58.312Z",
    updatedAt: "2025-09-22T11:51:58.312Z",
  },
];

export async function GET() {
  return Response.json(blogs);
}

export async function POST(request: Request) {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };

  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
