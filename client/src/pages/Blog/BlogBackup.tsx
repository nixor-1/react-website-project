import { useState, useEffect, useMemo } from "react";
import BtnBar from "../../components/BtnBar";
import { useNavigate } from "react-router-dom";
import { BlogPostProps } from "../BlogPost";
import { BtnProps } from "../../components/Btn";
import { ComponentOrientation } from "@react-project/shared/components";
import { GenericTableColumn } from "../../components/Table/Table.types";
import Table from "../../components/Table";
import { useTranslation } from "react-i18next";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";

interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL;

const BlogPost = ({ id, title, description }: BlogPostProps) => {
  return (
    <div key={id} className="truncate p-1">
      <h2 className="text-lg text-color-primary truncate">{title}</h2>
      <p className="text-base text-color-primary truncate">{description}</p>
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();
  // const blogPosts = useAppSelector((state) => state.blogPosts);
  const { t, i18n } = useTranslation();
  const [testPosts, setTestPosts] = useState<BlogMetadata[]>([]);
  const [mdxLoading, setMdxLoading] = useState(true);

  useEffect(() => {
    const fetchAllMetadata = async () => {
      try {
        const articles = import.meta.glob("../../../../content/blogs/**/*.mdx");
        const resolvedList: BlogMetadata[] = [];

        for (const path in articles) {
          const slug = path.split("/").pop()?.replace(".mdx", "") || "";
          const module: any = await articles[path]();

          // Checking safely for frontmatter properties
          if (module && module.frontmatter) {
            resolvedList.push({
              slug,
              title: module.frontmatter.title || "Untitled",
              date: module.frontmatter.date || "—",
              excerpt: module.frontmatter.excerpt || "",
            });
          }
        }

        resolvedList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

        setTestPosts(resolvedList);
      } catch (err) {
        console.error("MDX Parsing Error:", err);
      } finally {
        setMdxLoading(false);
      }
    };

    fetchAllMetadata();
  }, []);

  const [blogPosts, setPosts] = useState<BlogPostProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/posts`);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to connect to backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const blogPostBtns = useMemo<BtnProps[]>(
    () => [
      {
        iconName: "create",
        btnText: "Create",
        onClick: () => navigate(`/blog/new`),
      },
      {
        iconName: "delete",
        btnText: "Delete",
      },
    ],
    [],
  );

  // if (loading) return <p>Loading blog posts...</p>;

  const columns: GenericTableColumn<BlogPostProps>[] = [
    {
      header: t("blog-posts-table.header-title"),
      className: "w-[50%]",
      render: (post) => (
        // <Btn className="w-full overflow-hidden" key={post.id} onClick={() => navigate(`/blog/${post.id}`, { state: post.id as string })}>
        <BlogPost {...post} />
      ),
    },
    {
      header: t("blog-posts-table.creation-date"),
      className: "w-[25%] whitespace-nowrap",
      render: (post) => (
        <p className="text-base text-color-primary">
          {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "—"}
        </p>
      ),
    },
    {
      header: t("blog-posts-table.last-update-date"),
      className: "w-[25%] whitespace-nowrap",
      render: (post) => (
        <p className="text-base text-color-primary">
          {post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "—"}
        </p>
      ),
    },
  ];

  // const oldReturn = () => {
  //   return (
  //     <div className="grid grid-rows-[auto_1fr] h-full w-full overflow-hidden">
  //
  //       <StatusBar statusBarText="You are currently viewing all blog posts" orientation={ComponentOrientation.HORIZONTAL} />
  //
  //       <div className="grid grid-cols-[auto_1fr] overflow-hidden">
  //
  //         <aside className="h-full z-10">
  //           <BtnBar
  //             orientation={ComponentOrientation.VERTICAL}
  //             btnConfigs={blogPostBtns}
  //           />
  //         </aside>
  //
  //         <PageMargins pageMarginsWidth="large" className="overflow-hidden">
  //           <div className="h-full w-full overflow-hidden">
  //             <Table
  //               data={blogPosts}
  //               columns={columns}
  //               rowKey={(post) => post.id}
  //             />
  //           </div>
  //         </PageMargins>
  //
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {t("blog-posts-table.header-title")}
      </h1>
      <div className="flex flex-col gap-6">
        {testPosts.map((post) => (
          <article key={post.slug} className="border-b pb-4">
            {/* Direct href link matches your routing logic setup */}
            <a
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <p className="text-sm text-gray-400 my-1">{post.date}</p>
            <p className="text-gray-600">{post.excerpt}</p>
          </article>
        ))}
        {testPosts.length === 0 && (
          <p>No blog posts found for this language profile.</p>
        )}
      </div>
    </div>
  );

  return (
    <PageMarginsNew
      pageMarginsWidth="2"
      leftCol={
        <BtnBar
          orientation={ComponentOrientation.VERTICAL}
          btnConfigs={blogPostBtns}
        />
      }
    >
      <Table
        data={blogPosts}
        columns={columns}
        rowKey={(post) => post.id}
        useFixedLayout={true}
      />
    </PageMarginsNew>
  );
};

export default Blog;
