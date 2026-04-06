import httpStatus from "http-status";
import crypto from "crypto";
import bcrypt, { hash } from "bcrypt";
import { User } from "../models/user.model.js";


const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "All fields are required" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
        }

        if (bcrypt.compare(password, user.password)) {
            let token = crypto.randomBytes(20).toString("hex");

            user.token = token;
            await user.save();
            return res.status(httpStatus.OK).json({ message: "User logged in successfully", token: token });
        }

    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
}

const register = async (req, res) => {
    const { name, username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(httpStatus.FOUND).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name: name,
            username: username,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(httpStatus.CREATED).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
}

export { login, register };