const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (!bearerHeader) return res.status(403).json({ message: 'Token is required' });
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    req.token = token;
    next();
}
export { verifyToken }
