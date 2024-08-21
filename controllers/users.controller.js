import User from '../models/user.model.js'
import { encryptPassword, comparePassword, createAccessToken } from '../utils/protect-data.js'


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
const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password) // Check if the data is coming
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });
    const userFound = await User.findOne({ email });
    if (!userFound) return res.status(400).json({ message: 'User not found' });
    const isPasswordCorrect = await comparePassword(userFound.password, password);
    if (!isPasswordCorrect) return res.status(401).json({ message: 'Invalid password' });
    const accesToken = createAccessToken(userFound._id);
    console.log({accesToken});

    res.status(200).json({ message: 'Login',accesToken });
}

const logout = async (req, res) => {}

export { register, login, logout }