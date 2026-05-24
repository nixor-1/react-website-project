import React from "react";
import { MDXProvider } from "@mdx-js/react";
import List from "../../components/List";
import Icon from "../../components/Icon";

// Map custom markdown syntax or regular tags directly to your custom components
const globalComponents = {
  List,
  Icon,
  h1: (props: any) => (
    <h1 className="text-title-primary text-3xl font-bold my-4" {...props} />
  ),
  h2: (props: any) => (
    <h2
      className="text-title-secondary text-2xl font-semibold my-3"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="text-body-primary leading-relaxed my-2" {...props} />
  ),
};

export const BlogLayoutWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MDXProvider components={globalComponents}>
      <div className="prose dark:prose-invert mx-auto max-w-4xl px-4 py-8">
        {children}
      </div>
    </MDXProvider>
  );
};
