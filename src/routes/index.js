import { Router } from 'express';

import posts from './posts';

const router = new Router();

router.get('/', (req, res) => {
  res.json({ msg: 'hoi' });
});

router.use('/posts', posts);

export default router;
