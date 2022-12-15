const Router = require('express');
const data = require('../data');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const model = require('../models/user.model');

const router = Router();


router.get("/seed",asyncHandler(
    async (req,res)=>{
        const foodCount = await model.countDocuments();
        if(foodCount>0){
            res.send("seed is already done !")
            return;
        }
        
        await model.create(data.sample_users);
        res.send("seed is done! ");
    }
))

router.post("/login",asyncHandler(
    async(req,res)=>{
        const {email, password} = req.body;
        passwordhash  = await bcrypt.hash(password, 10);
        const user = await model.findOne({email, passwordhash});
        if(user){
            res.send(generateTokenResponse(user));
        }else{
            res.status(400).send("User name or password is not valid");
        }
    }
))

router.post('/register',asyncHandler(
    async (req,res)=>{
        const {name, email, password, address} = req.body;
        const user = await model.findOne({email})
        if(user){
            res.status(400).send('User is already exist');
            return;
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = User={
            id:'',
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address:address,
            isAdmin:false
        }

        const dbUser = await model.create(newUser);
        res.send(generateTokenResponse(dbUser))
    }
))

const generateTokenResponse = (user)=>{
    const token = jwt.sign({
        email:user.email,
        isAdmin:user.isAdmin
    },"SomeRandomText",{
        expiresIn:"30d"
    });
    user.token = token;
    return user;
}

module.exports = router;