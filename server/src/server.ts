import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { Api } from "@react-project/shared";
import type { Express, Request, Response } from 'express';
import { prisma } from './db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.json());

app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const allPosts = await prisma.blogPosts.findMany(); // Queries Postgres
    res.json(allPosts); // Sends data back to the browser as JSON
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from DB" });
  }
});

app.get('/api/posts/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const post = await prisma.blogPosts.findUnique({
      where: { id: id },
    });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch post from DB" });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const { title, content, description } = req.body;

    const newPost = await prisma.blogPosts.create({
      data: {
        title,
        content,
        description,
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Could not create post" });
  }
});

app.put('/api/posts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, description } = req.body;

    if (typeof id !== 'string') {
      return res.status(400).json({ error: "ID must be a string" });
    }

    // Prisma update query
    const updatedPost = await prisma.blogPosts.update({
      where: { id: id },
      data: {
        title,
        description,
        content,
      },
    });

    res.json(updatedPost);
  } catch (error: any) {
    // Prisma throws a specific error code (P2025) if the record isn't found
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Post not found" });
    }

    console.error("Update error:", error);
    res.status(500).json({ error: "Failed to update post" });
  }
});

app.delete('/api/posts/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== 'string') {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // Prisma delete query
    await prisma.blogPosts.delete({
      where: { id: id },
    });

    // 204 No Content is standard for successful deletions with no return body
    res.status(204).send();
  } catch (error: any) {
    // P2025 is Prisma's "Record to delete does not exist" error code
    if (error.code === 'P2025') {
      return res.status(404).json({ error: "Post not found" });
    }

    console.error("Delete error:", error);
    res.status(500).json({ error: "Failed to delete post" });
  }
});

app.get('/api/hello', (req: Request, res: Response<Api.ApiResponse>) => {
  const message = "Hello from the Backend!";

  res.json({
    message: message,
    timestamp: new Date().toISOString()
  });
});

// 5. START THE SERVER
// This keeps the app running, waiting for requests on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
