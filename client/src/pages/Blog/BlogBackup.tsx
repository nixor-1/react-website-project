
import { useState, useEffect } from "react";
import { BtnBarOrientation } from "../../components/BtnBar";
import BtnBar from "../../components/BtnBar";
import Btn from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import { BlogPostProps } from "../BlogPost";
import { useAppSelector } from "../../store/hooks";
import { BtnProps } from "../../components/Btn";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const BlogPost = ({ id, title, description }: BlogPostProps) => {
  return (
    <div
      key={id}
      className="p-1"
    >
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {title}
      </h2>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  )
}

const blogPostBtns: BtnProps[] = [
  {
    iconName: 'create',
    btnText: "Create",
    onClick: () => console.log("Create button not yet implemented."),
  },
];

const Blog = () => {
  const navigate = useNavigate();
  // const blogPosts = useAppSelector((state) => state.blogPosts);

  const [blogPosts, setPosts] = useState<BlogPostProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTitle,
          content: newContent,
          description: "Added via frontend", // Optional description
        }),
      });

      if (!response.ok) throw new Error("Failed to create post");

      // Refresh the list after successful post
      setNewTitle("");
      setNewContent("");
      await fetchPosts();
    } catch (err) {
      alert("Error saving post");
    }
  };

  if (loading) return <p>Loading blog posts...</p>;

  return (
    <>
      {/* <div> */}
      {/*   <h1>My Tech Blog</h1> */}
      {/*   {posts.length === 0 ? ( */}
      {/*     <p>No posts found. Go add one in DBeaver!</p> */}
      {/*   ) : ( */}
      {/*     posts.map(post => ( */}
      {/*       <article key={post.id} style={{ borderBottom: '1px solid #444', padding: '1rem' }}> */}
      {/*         <h2>{post.title}</h2> */}
      {/*         <p>{post.content}</p> */}
      {/*         <small>Created at: {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : 'N/A'}</small> */}
      {/*       </article> */}
      {/*     )) */}
      {/*   )} */}
      {/* </div> */}
      <section className="mb-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="p-2 border rounded"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <textarea
            className="p-2 border rounded"
            placeholder="Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Publish Post
          </button>
        </form>
      </section>
      <div className="flex h-full">
        <BtnBar orientation={BtnBarOrientation.VERTICAL} btnConfigs={blogPostBtns} />
        {/* <div className="bg-white rounded-xl shadow-sm p-6"> */}
        <div className="bg-white p-4 w-full overflow-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog Posts</h2>
          <div className="grid gap-4">
            {blogPosts.map((post, index) => (
              <Btn key={index} onClick={() => navigate(`/blog/${post.id}`, { state: post.id as string })}>
                <BlogPost {...post} />
              </Btn>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
