import passport from "passport";
import { Strategy } from "passport-github2";


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new Strategy({

    },
    async (email, password, done) => {

    }
));

export default passport;
