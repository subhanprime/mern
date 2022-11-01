import User from '../schema/useSchema.js'
export const adduser = async (req, res) => {
    console.log('router post', req.body);
    const newuser = new User(req.body);
    try {
        await newuser.save();
        res.status(201).json(newuser);
    } catch (err) {
        res.status(400).json('database me save ni ho rha');
        console('database me save ni ho rha')
    }
}

export const allUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
    console.log('all user')
}