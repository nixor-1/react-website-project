# Overview

This is my personal website consisting of a React frontend built with Vite and TypeScript. Principal features of my personal website include:

- **A blog:** I have a blog section in which blog posts, written by me, can be read at the visitor's leisure.
- **A resume/about page:** You can read a little about me, my background, my interests, and skills.
- **Links:** You can find links to some of my other socials.

# Running on an AWS EC2 server

Currently, the site is set up to run on an AWS EC2 machine at the following domain: nickjoergensen.com. I have written a short blog post about this at: https://www.nickjoergensen.com/en/blog/site-now-running-on-aws.

As mentioned in the blog post, SPA fallback required setting up. To achieve this, an `.htaccess` file was created with rerouting rules and placed directly next to the `index.html` file. In this GitHub repository, this file can be found at the following path: `client/public/`. The reasoning for this is that all files in `client/public/` are placed directly in the root folder by Vite when the project is built.
