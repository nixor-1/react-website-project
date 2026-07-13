import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostProps } from "../BlogPost";
import { GenericTableColumn } from "../../components/Table/Table.types";
import Table from "../../components/Table";
import { useTranslation } from "react-i18next";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";
import Btn from "../../components/Btn";
import TextBox from "../../components/TextBox";

interface BlogMetadata {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogPost = ({ id, title, description }: BlogPostProps) => {
  return (
    <div key={id} className="truncate p-1">
      <h2 className="text-title-secondary truncate">{title}</h2>
      <p className="text-color-primary truncate">{description}</p>
    </div>
  );
};

const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [testPosts, setTestPosts] = useState<BlogMetadata[]>([]);
  const [mdxLoading, setMdxLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 5;

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
              date: module.frontmatter["date-created"] || "—",
              excerpt: module.frontmatter["desc"] || "",
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

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(formattedMdxPosts.length / POSTS_PER_PAGE));
  }, [formattedMdxPosts, POSTS_PER_PAGE]);

  const paginatedMdxPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return formattedMdxPosts.slice(startIndex, endIndex);
  }, [formattedMdxPosts, currentPage, POSTS_PER_PAGE]);

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
        data={paginatedMdxPosts}
        columns={columns}
        rowKey={(post) => post.id}
        useFixedLayout={true}
        onRowClick={(post) => navigate(`${post.id}`)}
      />

      <div className="flex flex-row items-center justify-center mt-6 gap-4 w-full">
        <Btn
          btnText={t("blog-posts-table.nav.btn-left")}
          iconName="arrow-left"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
          }}
        />

        <TextBox
          className="md:border-0 border-2 border-color-primary rounded-rounding-primary"
          textBoxContent={
            <span className="text-sm font-medium text-color-primary">
              {t("blog-posts-table.nav.page-display", {
                pageNum: currentPage,
                numTotalPages: totalPages,
              })}
            </span>
          }
        />

        <Btn
          btnText={t("blog-posts-table.nav.btn-right")}
          iconName="arrow-right"
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
          }}
        />
      </div>
    </PageMarginsNew>
  );
};

export default Blog;
