import  express  from "express";

import { createTweet } from "../../controllers/tweet-controller.js";

import { toggleLike } from "../../controllers/like-controller.js";

import { createComment } from "../../controllers/comment-controller.js";

import { signup ,login} from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";

const router=express.Router();

router.post('/tweets',authenticate,createTweet);  //  because of (authenticate) {only autherized user can tweet}

router.post('/likes/toggle',authenticate,toggleLike); //  because of (authenticate) {only autherized user can tweet}

router.post('/comments',authenticate,createComment); //  because of (authenticate) {only autherized user can tweet}

router.post('/signup',signup);

router.post('/login',login);

export default router;