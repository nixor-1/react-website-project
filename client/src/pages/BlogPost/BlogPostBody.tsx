import TextInput from "../../components/TextInput";
import { BlogPostBodyElementType, BlogPostBodyElementProps, BlogPostMode } from "./BlogPost.types";

const BlogPostBodyElement = ({
  type,
  mode,
  val,
  error,
  onChange
}: BlogPostBodyElementProps) => {
  const config = {
    [BlogPostBodyElementType.Title]: {
      label: "Blog post title",
      placeholder: "Enter a title...",
      multiline: false,
      viewClass: "text-3xl text-title"
    },
    [BlogPostBodyElementType.Description]: {
      label: "Blog post description",
      placeholder: "Enter a short description...",
      multiline: true,
      viewClass: "text-xl text-color-primary whitespace-pre-wrap leading-relaxed"
    },
    [BlogPostBodyElementType.Body]: {
      label: "Blog post body",
      placeholder: "Write your content here...",
      multiline: true,
      viewClass: "text-base text-color-primary whitespace-pre-wrap leading-relaxed"
    }
  };

  const current = config[type];

  if (mode === BlogPostMode.ViewMode) {
    return (
      <div className={current.viewClass}>
        {val || <span className="italic text-gray-300">No {type} provided.</span>}
      </div>
    );
  }

  return (
    <TextInput
      textInputLabel={current.label}
      placeholder={current.placeholder}
      multiline={current.multiline}
      value={val}
      error={error}
      onChange={onChange}
    />
  );
};

export default BlogPostBodyElement;
