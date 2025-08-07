const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Add CORS headers middleware (if not already added globally in your app)
exports.corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
};

exports.signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hardcoded admin credentials check
    if (email === 'princekushwaha@reddingtonglobal.com' && password === 'Admin@123') {
      const adminUser = {
        _id: 'adminid123456',
        name: 'Admin User',
        email: 'princekushwaha@reddingtonglobal.com',
        isAdmin: true
      };
      const token = jwt.sign(
        { _id: adminUser._id, email: adminUser.email, isAdmin: adminUser.isAdmin, name: adminUser.name },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      );
      return res.json({ token, user: adminUser });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign(
      { _id: user._id, email: user.email, isAdmin: user.isAdmin, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, user: { _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin } });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
