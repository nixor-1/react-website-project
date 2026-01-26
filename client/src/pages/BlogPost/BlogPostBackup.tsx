import { useParams } from "react-router-dom";
import { BlogPostBodyElementType, BlogPostFormData, BlogPostFormErrors, BlogPostFormFields, BlogPostProps } from "./BlogPost.types";
import BtnBar, { BtnBarOrientation } from "../../components/BtnBar";
import { BtnProps } from "../../components/Btn/Btn.types";
import { useState, useEffect } from "react";
import { BlogPostMode } from "./BlogPost.types";
import BlogPostBodyElement from "./BlogPostBody";
import Modal from "../../components/Modal";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPostProps>();
  const [blogPostMode, setBlogPostMode] = useState<BlogPostMode>(BlogPostMode.ViewMode);
  // When switching between modes, it can be necessary to remember which one you were trying to switch to.
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
    if (!blogPost) return;

    setFormData({
      title: blogPost.title || "",
      description: blogPost.description || "",
      body: blogPost.content || ""
    });

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

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          content: formData.body,
        }),
      });

      if (!res.ok) throw new Error("Failed to save");

      const savedPost = await res.json();
      setBlogPost(savedPost);
      setBlogPostMode(BlogPostMode.ViewMode);

      alert("Post updated successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to save changes to the server.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you certain you want to delete this post? This action cannot be undone.")) {
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error("Delete failed");

      // Success! Redirect the user
      alert("Post deleted successfully.");
      navigate('/blog'); // Or wherever your post list is located
    } catch (err) {
      console.error(err);
      alert("Could not delete the post.");
    }
  };

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>();

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

  useEffect(() => {
    fetchPost();
  }, []);

  const switchBlogPostMode = (nextMode: BlogPostMode) => {
    if (blogPostMode === BlogPostMode.EditMode && nextMode === BlogPostMode.ViewMode && isFormDirty()) {
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
      handleReset(); // Discard changes
      setPendingMode(null);
    }
    setIsModalOpen(false);
  };

  const blogPostModeBtns: BtnProps[] = [
    {
      iconName: 'view',
      btnText: "View mode",
      onClick: () => switchBlogPostMode(BlogPostMode.ViewMode),
      isToggled: blogPostMode === BlogPostMode.ViewMode,
    },
    {
      iconName: 'edit',
      btnText: "Edit mode",
      onClick: () => switchBlogPostMode(BlogPostMode.EditMode),
      isToggled: blogPostMode === BlogPostMode.EditMode,
    },
  ];

  const blogPostViewOptionsBtns: BtnProps[] = [
    {
      iconName: 'delete',
      btnText: "Delete",
      onClick: handleDelete,
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
      onClick: handleSave,
    },
    {
      iconName: 'delete',
      btnText: "Delete",
      onClick: handleDelete,
    }
  ];

  return (
    <>
      <div className="flex h-full">
        <BtnBar orientation={BtnBarOrientation.VERTICAL} btnConfigs={blogPostModeBtns} />
        {(blogPostMode === BlogPostMode.ViewMode) && <BtnBar color="bg-gray-100" orientation={BtnBarOrientation.VERTICAL} btnConfigs={blogPostViewOptionsBtns} />}
        {(blogPostMode === BlogPostMode.EditMode) && <BtnBar color="bg-gray-100" orientation={BtnBarOrientation.VERTICAL} btnConfigs={blogPostEditOptionsBtns} />}
        <div className="bg-white p-8 w-full overflow-auto flex flex-col gap-6">
          <BlogPostBodyElement
            type={BlogPostBodyElementType.Title}
            mode={blogPostMode}
            val={formData.title}
            error={formErrors.title}
            onChange={(val) => handleInputChange("title", val)}
          />
          <div className="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1">
            <span className="text-gray-400 text-xs font-medium">Created at:</span>
            <span className="text-gray-500 text-xs">
              {blogPost?.createdAt ? new Date(blogPost.createdAt).toLocaleString() : "—"}
            </span>
            <span className="text-gray-400 text-xs font-medium">Last updated at:</span>
            <span className="text-gray-500 text-xs">
              {blogPost?.updatedAt ? new Date(blogPost.updatedAt).toLocaleString() : "—"}
            </span>
          </div>
          <BlogPostBodyElement
            type={BlogPostBodyElementType.Description}
            mode={blogPostMode}
            val={formData.description}
            error={formErrors.description}
            onChange={(val) => handleInputChange("description", val)}
          />
          <BlogPostBodyElement
            type={BlogPostBodyElementType.Body}
            mode={blogPostMode}
            val={formData.body}
            error={formErrors.body}
            onChange={(val) => handleInputChange("body", val)}
          />
          <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-gray-400">
            ID: {blogPost?.id}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 flex flex-col gap-4">
          <h3 className="text-lg font-bold">Unsaved Changes</h3>
          <p className="text-gray-600 text-sm">
            If you leave now, all changes made will be undone. Are you sure you want to proceed?
          </p>
          <div className="flex justify-end gap-2 mt-2">
            <Btn
              btnText="Cancel"
              onClick={() => setIsModalOpen(false)}
            // Style this as a secondary button if possible
            />
            <Btn
              btnText="Discard Changes"
              onClick={confirmModeSwitch}
            // Style this as a danger/primary button
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlogPost;
