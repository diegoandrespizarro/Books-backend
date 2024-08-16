import User from '../models/user.model.js'
import { encryptPassword } from '../utils/protect-data.js'


const register = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({ 
        username, 
        email, 
        password: await encryptPassword(password) 
    });
    const userSaved = await newUser.save();
    res.status(201).json(userSaved);
}
const login = async (req, res) => {}
const logout = async (req, res) => {}

export { register, login, logout }