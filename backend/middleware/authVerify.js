import jwt from 'jsonwebtoken';

const authVerify = (req,res,next) =>{
  const token = req.headers['authorization']?.split(' ')[1]; 
  console.log('Token received:', token);

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next(); 
  } catch (err) {
    console.error('Token verification failed:', err);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

export { authVerify };
