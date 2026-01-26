import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";
import { BlogPostProps } from '../../pages/BlogPost';

const blogPostsTestData: BlogPostProps[] = [
  {
    id: uuidv4(),
    title: 'Blog title 1',
    description: 'Abbreviated text describing the contenst of blog 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim diam, imperdiet ac bibendum at, bibendum vitae eros. Cras egestas fermentum venenatis. Sed risus tellus, malesuada et nibh nec, fermentum laoreet mi. Vestibulum luctus, tellus in pellentesque imperdiet, ante lectus elementum lectus, id lacinia augue ligula lacinia purus. Vestibulum ac vulputate odio. Aenean rhoncus urna et pulvinar fringilla. Donec sit amet congue odio, ut auctor eros. Cras at diam erat. Ut odio orci, malesuada et euismod et, tincidunt quis tellus. Cras quis leo non sem convallis hendrerit finibus eget augue. Etiam id neque ex. Nunc lobortis nisl ut nisl tristique volutpat. In efficitur eros at leo consequat, nec congue eros vulputate. Aliquam dapibus lorem non orci hendrerit pulvinar. Sed at mattis ex. Praesent molestie ex at risus consequat placerat ornare at ipsum. Sed gravida tortor turpis, eget condimentum turpis hendrerit vitae. Phasellus id nunc sem. Vivamus vitae ante vel mauris maximus laoreet fringilla a dui. Quisque vitae odio id sem pretium sollicitudin. Aliquam blandit ipsum nec velit semper, vel maximus mauris lobortis. Aliquam sodales, arcu vitae faucibus mattis, massa ipsum tincidunt massa, laoreet varius purus ligula ut est. In rhoncus sed ligula vel laoreet. Cras gravida egestas efficitur. Vestibulum consequat, mauris non facilisis sagittis, diam turpis ullamcorper orci, eu eleifend turpis ex vel nunc. Nullam blandit arcu augue, nec congue ante blandit nec. Sed sed mi vel nulla laoreet porttitor in quis metus. Donec cursus elementum dui, quis pellentesque neque vehicula vel. Pellentesque elementum, mi fringilla dictum porta, leo augue suscipit ante, a pulvinar est ipsum ac eros. Nam aliquet dui ut erat lobortis, ac lacinia lectus laoreet. Fusce et est sodales, interdum lorem ut, aliquet dui. In mauris nibh, interdum nec facilisis sit amet, consectetur vitae lacus. Nam sollicitudin lectus non convallis congue. In hac habitasse platea dictumst. Proin porta sapien ac odio laoreet, ut congue leo tincidunt. Curabitur aliquet varius aliquam. Nullam fringilla rutrum mauris vitae tempor. Etiam ac urna faucibus, dignissim magna at, pulvinar metus. Phasellus hendrerit aliquam velit sit amet vulputate. Phasellus id consequat odio, vitae pharetra elit. Sed rhoncus viverra arcu id condimentum. Donec erat purus, rutrum eget tellus ac, commodo rutrum dolor. Suspendisse quis nulla dui. Mauris vestibulum condimentum elit vitae condimentum. Phasellus sit amet risus lacinia, mollis nunc quis, ultrices augue. Morbi a urna id velit euismod pulvinar consectetur in dui. Nam sollicitudin, libero ut condimentum pharetra, odio nunc egestas nisl, dapibus imperdiet dui arcu eget velit. Nullam gravida hendrerit vulputate. Integer ultrices turpis eu tortor eleifend finibus. Mauris vehicula venenatis magna ut faucibus. Duis et leo hendrerit, molestie urna sed, fermentum diam. Nam eleifend nulla auctor, volutpat tellus sit amet, dignissim libero. Cras ornare mattis eros, ac luctus turpis mollis sit amet. Nam commodo tellus quis nisi accumsan, non lacinia risus bibendum. Nunc commodo, sapien rhoncus sagittis mattis, nunc arcu consectetur felis, id vestibulum est libero ut nisi. Quisque malesuada diam vitae cursus iaculis. Nam eget mi sagittis ligula suscipit blandit.'
  },
  {
    id: uuidv4(),
    title: 'Blog title 2',
    description: 'Abbreviated text describing the contenst of blog 2',
    content: 'Some content of blog with title 2'
  },
  {
    id: uuidv4(),
    title: 'Blog title 3',
    description: 'Abbreviated text describing the contenst of blog 3',
    content: 'Some content of blog with title 3'
  },
  {
    id: uuidv4(),
    title: 'Blog title 4',
    description: 'Abbreviated text describing the contenst of blog 4',
    content: 'Some content of blog with title 4'
  },
  {
    id: uuidv4(),
    title: 'Blog title 5',
    description: 'Abbreviated text describing the contenst of blog 5',
    content: 'Some content of blog with title 5'
  },
  {
    id: uuidv4(),
    title: 'Blog title 6',
    description: 'Abbreviated text describing the contenst of blog 6',
    content: 'Some content of blog with title 6'
  },
]

export const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState: blogPostsTestData,
  reducers: {
    addBlogPost: (state: BlogPostProps[], action: PayloadAction<BlogPostProps>) => {
      state.push(action.payload);
    },
    modifyBlogPostById: (state: BlogPostProps[], action: PayloadAction<BlogPostProps>) => {
      const blogPostId = action.payload.id;
      const blogPostIndex = state.findIndex(blogPost => blogPost.id === blogPostId);
      state[blogPostIndex] = action.payload;
    },
    deleteBlogPostById: (state: BlogPostProps[], action: PayloadAction<string>) => {
      const blogPostId = action.payload;
      return state.filter(post => post.id !== blogPostId);
    },
  },
})

export const { addBlogPost, modifyBlogPostById, deleteBlogPostById } = blogPostsSlice.actions

export default blogPostsSlice.reducer
