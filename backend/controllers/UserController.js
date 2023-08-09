const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const signUp = async (req, res, next) => {
    const {name, email, password} = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (e) {
        console.log(e)
    }

    if (existingUser)
        return res.status(400).json({message: "User already exists! Login instead."})

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name, email, password: hashedPassword
    })

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message: user})
}

const login = async (req, res, next) => {
    const {email, password} = req.body

    let existingUser;
    try {
        existingUser = await User.findOne({email: email});
    } catch (e) {
        return new Error(e);
    }

    if (!existingUser)
        return res.status(400).json({message: "User not found. Signup Please."})


    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect)
        return res.status(400).json({message: "Invalid Email/Password"})

    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY, {expiresIn: '30s'});

    console.log("Generated token\n", token)
    if (req.cookies[`${existingUser._id}`]){
        req.cookies[`${existingUser._id}`] = ''
    }

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        httpOnly: true,
        sameSite: 'lax',
    });

    return res.status(200).json({message: 'Successfully logged in', user: existingUser, token})
}

const verifyToken = async (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];

    if (!token)
        res.status(404).json({message: "No token found."})

    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err)
            return res.status(400).json({message: "Invalid Token."})

        req.id = user.id;
    })
    next();
}

const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;

    try {
        user = await User.findById(userId);
    } catch (err) {
        return new Error(err);
    }

    if (!user)
        return res.status(404).json({message: "User not found."})

    return res.status(200).json(user)
}

const refreshToken = async (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];

    if (!prevToken)
        return res.status(400).json({message: "Couldn't find token"})

    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err){
            console.log(err)
            return res.status(403).json({message: "Authentication failed"})
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY, {
            expiresIn: '30s'
        })

        res.cookie(String(user.id), token, {
            path: '/',
            expires: new Date(Date.now() + 1000 * 30),
            httpOnly: true,
            sameSite: 'lax',
        });
        req.id = user.id;
    })
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    next();
}

exports.signUp = signUp;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;
