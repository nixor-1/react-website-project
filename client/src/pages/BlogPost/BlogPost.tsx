import { useParams } from "react-router-dom";
import { BlogPostBodyElementType, BlogPostFormData, BlogPostFormErrors, BlogPostFormFields, BlogPostProps } from "./BlogPost.types";
import BtnBar from "../../components/BtnBar";
import { BtnProps } from "../../components/Btn/Btn.types";
import { useState, useEffect } from "react";
import { BlogPostMode } from "./BlogPost.types";
import BlogPostBodyElement from "./BlogPostBody";
import Modal from "../../components/Modal";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import StatusBar from "../../components/StatusBar";
import { ComponentOrientation } from "@react-project/shared/components";
import PageMargins from "../../components/PageMargins";
import { useTranslation } from "react-i18next";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const BlogPost = ({ isNewPost }: { isNewPost: boolean }) => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  const [blogPost, setBlogPost] = useState<BlogPostProps>();
  const [blogPostMode, setBlogPostMode] = useState<BlogPostMode>(
    isNewPost ? BlogPostMode.CreateMode : BlogPostMode.ViewMode
  );
  const [isPreview, setIsPreview] = useState(false);

  const effectiveMode = isPreview ? BlogPostMode.ViewMode : blogPostMode;

  const [pendingMode, setPendingMode] = useState<BlogPostMode | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<BlogPostFormData>({
    title: "",
    description: "",
    body: ""
  });

  const [formErrors, setFormErrors] = useState<BlogPostFormErrors>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (blogPost) {
      setFormData({
        title: blogPost.title || "",
        description: blogPost.description || "",
        body: blogPost.content || ""
      });
    }
  }, [blogPost]);

  const isFormDirty = () => {
    if (isNewPost) {
      return formData.title !== "" || formData.description !== "" || formData.body !== "";
    }
    if (!blogPost) return false;
    return (
      formData.title !== (blogPost.title || "") ||
      formData.description !== (blogPost.description || "") ||
      formData.body !== (blogPost.content || "")
    );
  };

  const handleInputChange = (field: BlogPostFormFields, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleReset = () => {
    if (isNewPost) {
      setFormData({ title: "", description: "", body: "" });
    } else if (blogPost) {
      setFormData({
        title: blogPost.title || "",
        description: blogPost.description || "",
        body: blogPost.content || ""
      });
    }
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (formData.title.length > 100) errors.title = "Title is too long";
    if (!formData.body.trim()) errors.body = "Body content cannot be empty";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveOrSubmit = async () => {
    if (!validateForm()) return;

    try {
      const url = isNewPost ? `${API_BASE_URL}/api/posts` : `${API_BASE_URL}/api/posts/${id}`;
      const method = isNewPost ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          content: formData.body,
        }),
      });

      if (!res.ok) throw new Error("Failed to process request");

      const savedPost = await res.json();

      if (isNewPost) {
        alert("Post published successfully!");
        navigate(`/blog/${savedPost.id}`);
      } else {
        setBlogPost(savedPost);
        setBlogPostMode(BlogPostMode.ViewMode);
        alert("Post updated successfully!");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to save changes to the server.");
    }
  };

  const handleDelete = async () => {
    if (isNewPost) return;

    if (!window.confirm("Are you certain you want to delete this post? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error("Delete failed");
      alert("Post deleted successfully.");
      navigate('/blog');
    } catch (err) {
      console.error(err);
      alert("Could not delete the post.");
    }
  };

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(!isNewPost);

  useEffect(() => {
    if (!isNewPost) {
      const fetchPost = async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/posts/${id}`);
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          const data = await res.json();
          setBlogPost(data);
        } catch (err) {
          console.error("Fetch error:", err);
          setError("Failed to connect to backend");
        } finally {
          setIsLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, isNewPost]);

  const switchBlogPostMode = (nextMode: BlogPostMode) => {
    const isEditing = blogPostMode === BlogPostMode.EditMode || blogPostMode === BlogPostMode.CreateMode;

    if (isEditing && nextMode === BlogPostMode.ViewMode && isFormDirty()) {
      setPendingMode(nextMode);
      setIsModalOpen(true);
      return;
    }

    setBlogPostMode(nextMode);
    if (nextMode === BlogPostMode.ViewMode) {
      handleReset();
    }
  };

  const confirmModeSwitch = () => {
    if (pendingMode) {
      setBlogPostMode(pendingMode);
      handleReset();
      setPendingMode(null);
    }
    setIsModalOpen(false);
  };

  const blogPostViewOptionsBtns: BtnProps[] = [
    {
      iconName: 'edit',
      btnText: "Edit",
      onClick: () => switchBlogPostMode(BlogPostMode.EditMode),
    }
  ];

  const blogPostEditOptionsBtns: BtnProps[] = [
    {
      iconName: 'reset',
      btnText: "Reset",
      onClick: handleReset,
    },
    {
      iconName: 'save',
      btnText: "Save",
      onClick: handleSaveOrSubmit,
    },
    {
      iconName: 'delete',
      btnText: "Delete",
      onClick: handleDelete,
    }
  ];

  const blogPostCreateOptionsBtns: BtnProps[] = [
    {
      iconName: 'reset',
      btnText: "Reset",
      onClick: handleReset,
    },
    {
      iconName: 'send',
      btnText: "Submit",
      onClick: handleSaveOrSubmit,
    },
  ];

  const blogPostModeBtns = (blogPostMode: BlogPostMode) => {
    switch (blogPostMode) {
      case BlogPostMode.ViewMode: {
        return blogPostViewOptionsBtns;
      }
      case BlogPostMode.EditMode: {
        return blogPostEditOptionsBtns;
      }
      case BlogPostMode.CreateMode: {
        return blogPostCreateOptionsBtns;
      }
    }
  }

  const statusBarText = (blogPostMode: BlogPostMode) => {
    switch (blogPostMode) {
      case BlogPostMode.ViewMode: {
        if (isPreview) {
          return (
            <span>
              You are currently <strong>previewing</strong> the blog post in <strong>view</strong> mode
            </span>
          )
        } else {
          return (
            <span>
              You are currently in <strong>view</strong> mode
            </span>
          )
        }
      }
      case BlogPostMode.EditMode: {
        return (
          <span>
            You are currently in <strong>edit</strong> mode
          </span>
        )
      }
      case BlogPostMode.CreateMode: {
        return (
          <span>
            You are currently in <strong>create</strong> mode
          </span>
        )
      }
    }
  }

  return (
    <div className="grid grid-rows-[auto_1fr] h-full w-full overflow-hidden">

      <StatusBar statusBarText={statusBarText(blogPostMode)} orientation={ComponentOrientation.HORIZONTAL} />

      <div className="grid grid-cols-[auto_1fr] overflow-hidden">

        <aside className="h-full z-10">
          <BtnBar
            orientation={ComponentOrientation.VERTICAL}
            btnConfigs={blogPostModeBtns(blogPostMode)}
          />
        </aside>

        <PageMargins className="overflow-auto flex flex-col gap-6" pageMarginsWidth="large">
          <main className="w-full overflow-auto flex flex-col gap-6 p-4 border-width-secondary border-color-primary rounded-rounding-primary bg-bg-color-primary">
            <BlogPostBodyElement
              type={BlogPostBodyElementType.Title}
              mode={effectiveMode}
              val={formData.title}
              error={formErrors.title}
              onChange={(val) => handleInputChange("title", val)}
            />

            {!isNewPost && (
              <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
                <span className="text-gray-400 text-xs font-medium">{t('blog-post.creation-date')}</span>
                <span className="text-gray-500 text-xs">
                  {blogPost?.createdAt ? new Date(blogPost?.createdAt).toLocaleString() : "—"}
                </span>
                <span className="text-gray-400 text-xs font-medium">{t('blog-post.last-update-date')}</span>
                <span className="text-gray-500 text-xs">
                  {blogPost?.updatedAt ? new Date(blogPost?.updatedAt).toLocaleString() : "—"}
                </span>
              </div>
            )}

            <BlogPostBodyElement
              type={BlogPostBodyElementType.Description}
              mode={effectiveMode}
              val={formData.description}
              error={formErrors.description}
              onChange={(val) => handleInputChange("description", val)}
            />
            <BlogPostBodyElement
              type={BlogPostBodyElementType.Body}
              mode={effectiveMode}
              val={formData.body}
              error={formErrors.body}
              onChange={(val) => handleInputChange("body", val)}
            />
          </main>
        </PageMargins>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Unsaved Changes</h3>
          <p className="text-gray-600 text-sm">
            If you leave now, all changes made will be undone. Are you sure you want to proceed?
          </p>
          <div className="flex justify-end gap-2 mt-2">
            <Btn btnText="Cancel" onClick={() => setIsModalOpen(false)} />
            <Btn btnText="Discard Changes" onClick={confirmModeSwitch} />
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default BlogPost;
