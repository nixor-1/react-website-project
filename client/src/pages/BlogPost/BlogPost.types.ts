export interface BlogPostProps {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum BlogPostMode {
  ViewMode = "VIEW_MODE",
  CreateMode = "CREATE_MODE",
  EditMode = "EDIT_MODE"
}

export enum BlogPostBodyElementType {
  Title = "title",
  Description = "description",
  Body = "body"
}

export interface BlogPostBodyElementProps {
  type: BlogPostBodyElementType;
  mode: BlogPostMode;
  val: string;
  error?: string;
  onChange: (value: string) => void;
}

export interface BlogPostFormData {
  title: string;
  description: string;
  body: string;
}

export type BlogPostFormFields = keyof BlogPostFormData;

export type BlogPostFormErrors = Partial<Record<BlogPostFormFields, string>>;
