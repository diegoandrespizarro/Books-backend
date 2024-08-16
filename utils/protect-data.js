import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}
const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}
const createAccessToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '24h'
    });
}

export {encryptPassword, comparePassword, createAccessToken}