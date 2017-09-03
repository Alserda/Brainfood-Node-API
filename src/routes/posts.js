import { Router } from 'express';
import { Post } from '../models';

// const { Post } = db;
console.log('abc: ', Post);
// console.log('post: ', db);
const router = new Router();

router.get('/', (req, res) => {
  console.log('posts index');
  res.json({ msg: 'posts index' });
});

export default router;
