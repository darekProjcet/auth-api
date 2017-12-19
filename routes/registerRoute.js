import express from 'express';
import Users from '../models/users';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  const user = await Users.find({
    where: {
      email
    }
  });

  if (!user) {
    try {
      await Users.create({
        username,
        email,
        password: Users.generateHash(password)
      });
      res.send({ data: { status: 'success' } });
    } catch (e) {
      res.status(400).send({ error: 'Error! User was not added!' });
    }
  } else {
    res.status(409).send({ error: 'user already exists' });
  }
});

export default router;
