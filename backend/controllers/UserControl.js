import { User } from '../model/User.js';
import jwt from 'jsonwebtoken';

const RegisterUser = async (req,res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      username,
      email,
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const LoginUser = async (req, res) => {
  try {
    const { username , password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
       res.status(404).json({ message: 'User not found' });
    }
    if (user.password !== password) {
       res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('Generated token:', token);
    const finalToken = `Bearer ${token}`;

  return    res.status(200).json(
      { message: 'Login successful',
        token: finalToken,
        user: { id: user._id, username: user.username, email: user.email } 
      });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const LogoutUser = async (req, res) => {
  try {
    res.removeHeader('Authorization');
    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error('Error logging out user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export { RegisterUser, LoginUser, LogoutUser };
