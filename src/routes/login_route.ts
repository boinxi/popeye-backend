import {Router} from "express";
import {getUserByUsername, postUser} from "../api/users/user_api";
import {generateJwtForUser} from "../services/jwt_service";
const express = require('express')
const router: Router = express.Router();

router.post('', async (req, res) => {
    const {username, password} = req.body;
    const actualUser = await getUserByUsername(username);
    if(actualUser != undefined && actualUser.password === password) {
        const userAccessToken = generateJwtForUser(actualUser.id);
        res.json({'accessToken': userAccessToken, 'id':actualUser.id});
        return;
    }
    res.statusCode = 401;
    res.send('unauthorized');
});

module.exports = router;