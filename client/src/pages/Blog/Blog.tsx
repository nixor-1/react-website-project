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
  const { t } = useTranslation();
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

  const formattedMdxPosts = useMemo<BlogPostProps[]>(() => {
    return testPosts.map((post) => ({
      id: post.slug,
      title: post.title,
      description: post.excerpt,
      content: "",
      createdAt: post.date !== "—" ? new Date(post.date) : undefined,
      updatedAt: post.date !== "—" ? new Date(post.date) : undefined,
    }));
  }, [testPosts]);

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

  const columns: GenericTableColumn<BlogPostProps>[] = [
    {
      header: t("blog-posts-table.header-title"),
      className: "w-[50%]",
      render: (post) => (
        <div className="cursor-pointer hover:opacity-80 transition-opacity">
          <BlogPost {...post} />
        </div>
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

  if (mdxLoading)
    return (
      <p className="p-8 text-center text-color-primary">
        Loading blog posts...
      </p>
    );

  return (
    <PageMarginsNew pageMarginsWidth="2">
      <Table
        data={formattedMdxPosts}
        columns={columns}
        rowKey={(post) => post.id}
        useFixedLayout={true}
        onRowClick={(post) => navigate(`/blog/${post.id}`)}
      />
    </PageMarginsNew>
  );
};

export default Blog;
