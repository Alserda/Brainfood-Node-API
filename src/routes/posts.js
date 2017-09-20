import { Router } from 'express';
import models from '../models';

const { Post } = models;
const router = new Router();

router.get('/', async (req, res) => {
  const posts = await Post.findAll();

  setTimeout(() => {
    res.status(200).json(posts);
  }, 2000);
});


router.post('/', async (req, res) => {
  const post = await Post.create(req.body);

  res.status(200).json(post);
});

router.get('/:id', async (req, res) => {
  const post = await Post.find({ where: { id: req.params.id } });

  res.status(200).json(post);
});

export default router;
