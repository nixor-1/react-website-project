import { useParams } from "react-router-dom";
import {
  BlogPostBodyElementType,
  BlogPostFormData,
  BlogPostFormErrors,
  BlogPostFormFields,
  BlogPostProps,
} from "./BlogPost.types";
import { useState, useEffect } from "react";
import { BlogPostMode } from "./BlogPost.types";
import BlogPostBodyElement from "./BlogPostBody";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMarginsNew from "../../components/PageMargins/PageMarginsNew";
import TextBox from "../../components/TextBox";

const BlogPost = ({ isNewPost }: { isNewPost: boolean }) => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  const [blogPost, setBlogPost] = useState<BlogPostProps>();

  const [MdxComponent, setMdxComponent] = useState<React.ComponentType | null>(
    null,
  );

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(!isNewPost);

  useEffect(() => {
    if (!isNewPost && id) {
      const loadLocalMdxPost = async () => {
        try {
          setIsLoading(true);
          const articles = import.meta.glob(
            "../../../../content/blogs/**/*.mdx",
          );
          const targetPath = `../../../../content/blogs/${id}.mdx`;

          if (articles[targetPath]) {
            const module: any = await articles[targetPath]();

            setMdxComponent(() => module.default);

            if (module.frontmatter) {
              const postDate = module.frontmatter.date
                ? new Date(module.frontmatter.date)
                : undefined;
              // Fallback checking to ensure it created a valid Date instance
              const validDate =
                postDate && !isNaN(postDate.getTime()) ? postDate : undefined;

              const mockData: BlogPostProps = {
                id: id,
                title: module.frontmatter.title || "Untitled",
                description: module.frontmatter.excerpt || "",
                content: "",
                createdAt: validDate,
                updatedAt: validDate,
              };
              setBlogPost(mockData);
            }
          } else {
            setError("Markdown file not found on disk loop registry.");
          }
        } catch (err) {
          console.error("Local MDX file initialization failure:", err);
          setError("Failed to load local markdown layout.");
        } finally {
          setIsLoading(false);
        }
      };

      loadLocalMdxPost();
    }
  }, [id, isNewPost]);

  if (isLoading) {
    return (
      <div className="p-8 text-center text-color-primary">
        Loading content engine...
      </div>
    );
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  const BlogPostContent = () => {
    return (
      <>
        <p>{blogPost?.description}</p>
        <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
          <span className="text-gray-400 text-xs font-medium">
            {t("blog-post.creation-date")}
          </span>
          <span className="text-gray-500 text-xs">
            {blogPost?.createdAt
              ? new Date(blogPost?.createdAt).toLocaleString()
              : "—"}
          </span>
          <span className="text-gray-400 text-xs font-medium">
            {t("blog-post.last-update-date")}
          </span>
          <span className="text-gray-500 text-xs">
            {blogPost?.updatedAt
              ? new Date(blogPost?.updatedAt).toLocaleString()
              : "—"}
          </span>
        </div>

        {MdxComponent && (
          <div className="space-y-5">
            <MdxComponent />
          </div>
        )}
      </>
    );
  };

  return (
    <div className="grid grid-rows-[auto_1fr] h-full w-full overflow-hidden">
      <PageMarginsNew pageMarginsWidth="2">
        <TextBox
          textBoxTitle={blogPost?.title}
          textBoxContent={<BlogPostContent />}
        />
      </PageMarginsNew>
    </div>
  );
};

export default BlogPost;
