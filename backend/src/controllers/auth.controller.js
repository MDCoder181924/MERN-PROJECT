const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 

async function registerUser(req, res) {

    const{ fullName, email, password} = req.body;

    const isUserAlreadyRegistered = await userModel.findOne({ 
        email: email
    });

    if(isUserAlreadyRegistered){
        return res.status(400).json({
            message: "User is already registered"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);


    const User = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: User._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user:{
            id: User._id,
            fullName: User.fullName,
            email: User.email,
        }
    });
}


async function loginUser(req, res){
    const{email, password} = req.body;

    const user = await userModel.findOne({
        email:email
    });

    if(!user){
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:" Invalid email or password"
        })
    }
    const token = jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(200).json({
        message: "User logged in successfully",
        user:{
            id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

module.exports ={
    registerUser,
    loginUser
}