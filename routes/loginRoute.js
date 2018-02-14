/* eslint-disable consistent-return */
import express from 'express';
import randToken from 'rand-token';
import Users from '../models/users';
import mailer from '../service/mailerService';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.find({
    where: {
      email
    }
  });

  if (!user || !user.vaildPassword(password)) {
    res.status(403).json({ error: 'incorrect email or password' });
    return;
  }

  const liveTimeToken = new Date(Date.now() + (12 * 3600000));
  user.token = { token: randToken.generate(24), liveTime: liveTimeToken };

  try {
    await user.save();
    const response = {
      ...user
    };
    res.status(200).json({ data: response });
  } catch (e) {
    res.status(401).json({ error: 'forbidden' });
  }
});

router.post('/password_reset', (req, res) => {
  const { email } = req.body.data;

  const user = Users.find({
    where: {
      email
    }
  });

  if (!user) {
    return res.status(422).send({ status: 'Invalid data' });
  }

  try {
    mailer.sendMailToUser(user.email, user.token);
  } catch (err) {
    res.status(422).send({ status: `Error: ${err}` });
  }
});
export default router;
