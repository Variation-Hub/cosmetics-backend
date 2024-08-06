const bcrypt = require('bcryptjs');
const User = require('../models/registerModel'); // adjust the path as necessary

// Registration route
const registerController = async (req, res) => {
    const { name, email, password, mobileNumber, address, city, state, pincode } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            mobileNumber,
            address,
            city,
            state,
            pincode
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', data: newUser, status: true });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', data: null, status: false });
    }
};

// Login route
const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials', data: null, status: false });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials', data: null, status: false });
        }

        res.status(200).json({ message: 'Logged in successfully', data: user, status: true });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', data: null, status: false });
    }
};

module.exports = {
    registerController,
    loginController
};
