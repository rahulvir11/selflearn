var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./post');
const passport = require('passport');
const localStrategy = require('passport-local');
const upload = require('./multer');

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function (req, res) {
  res.render('index', { footer: false });
});

router.get('/login', function (req, res) {
  res.render('login', { footer: false });
});

router.get('/feed', isLoggedIn, async function (req, res) {
  const posts = await postModel.find().populate("user");
  res.render('feed', { footer: true, posts });
});

router.get('/profile', isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user }).populate("posts");
  res.render('profile', { footer: true, user });
});

router.get('/search', isLoggedIn, function (req, res) {
  res.render('search', { footer: true });
});
router.get('/username/:username', async function (req, res) {
  try {
    const regex = new RegExp(`^${req.params.username}`, 'i')
    const users = await userModel.find({ username: regex });
    if (users) {
     res.json(users)
    }
    res.send("not found")
  } catch (error) {
    console.log(error);
  }

});

router.get('/edit', isLoggedIn, async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  res.render('edit', { footer: true, user });
});

router.get('/upload', isLoggedIn, function (req, res) {
  res.render('upload', { footer: true });
});


router.post("/register", function (req, res, next) {
  const userData = new userModel({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,

  });
  userModel.register(userData, req.body.password)
    .then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      })
    })
});
router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login"
}));

router.get('/logout', function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err) }
    res.redirect('/')
  });
});

router.post("/update", upload.single('image'), async function (req, res) {
  const user = await userModel.findOneAndUpdate(
    { username: req.session.passport.user },
    { username: req.body.username, name: req.body.name, bio: req.body.bio },
    { new: true });

  if (req.file) {
    user.profileImage = req.file.filename;
  }
  await user.save();
  res.redirect('/profile')

});

router.post('/upload', isLoggedIn, upload.single('image'), async function (req, res) {
  const user = await userModel.findOne({ username: req.session.passport.user });
  const post = await postModel.create({
    postImage: req.file.filename,
    caption: req.body.caption,
    user: user._id,
  });
  user.posts.push(post._id);
  await user.save();
  await post.save();
  res.redirect('/feed');
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}
module.exports = router;
