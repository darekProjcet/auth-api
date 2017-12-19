import { passport } from 'passport';
import Users from '../models/users';

const BearerStrategy = require('passport-http-bearer').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id);
  done(null, user);
});

passport.use(
  new BearerStrategy(async (token, done) => {
    const user = await Users.find({
      where: {
        token: {
          token
        }
      }
    });

    if (!user) {
      return done(null, false);
    }
    const tokenStillLive = Date.now() < user.token.liveTime;
    if (tokenStillLive) {
      return done(null, user, { scope: 'all' });
    }
    return done(null, false);
  })
);

