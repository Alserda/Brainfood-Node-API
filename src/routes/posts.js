import { Router } from 'express';
import models from '../models';


const { Post } = models;
const router = new Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll();

  res.status(200).json(posts);
});


router.post('/', async (req, res) => {
  const post = await Post.create(req.body);

  res.status(200).json(post);
});

export default router;
