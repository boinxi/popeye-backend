import {Router} from "express";
import {postUser} from "../api/users/user_api";
import {generateJwtForUser} from "../services/jwt_service";
const express = require('express')
const router: Router = express.Router();

router.post('', async (req, res) => {
    const {username, password} = req.body;
    const newUserId = await postUser(username, password);
    const userAccessToken = generateJwtForUser(newUserId);

    res.json({'accessToken': userAccessToken});
});

module.exports = router;