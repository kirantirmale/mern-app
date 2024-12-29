const jwt = require('jsonwebtoken');

const ensureAuthonticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized,JWT token  is require' });
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403)
            .json({ message: 'Unauthorized,JWT token Wrong or expired' });
    }
}

module.exports = ensureAuthonticated ;