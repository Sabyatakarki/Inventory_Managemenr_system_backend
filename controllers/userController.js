const User = require('../Model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req,res)=>{
    const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({
            error:"insert the username and password"
        });
    }
    try{
        const existingUser = await User.findOne({where:{username}})
        if(existingUser){
            return res.status(400).json({
                error:"Username already exists"
            })
        }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        const newUser = await User.create({username,password:hashedPassword})
        res.status(201).json({message:"Registration Successful"})
    }
    catch(error){
        res.status(500).json({error:"something went wrong"})
        console.log(error)
    }
}

const loginUser = async(req,res)=>{
    const{username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({
            error:"insert the username and password"

        });
    }
    try{
        const user = await user.findone({where:{username,}})
        if(!user){
            return res.status(400).json({
                error:"Username not found"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                error:"Password did not match"
            })
        }
        const token = jwt.sign(
            {id:user.id,username:user.username},
            "hellopofkljfwifnkjnfkjf",
            {expireIn:'24h'}
        );
        res .status(200).json({message:"Login successful............."},
        token)

    }
    catch (error){
        res.status(500).json({error:"something went wrong......"})
        console.log(error)

    }
}

/*const getTest = async(req,res)=>{
    try{
        const tests = await Test.findall()
        res.status(200).json(test);

    }
    catch(error){
        res.status(500).json({
            error:"failed to retreive data"
        })
    }
}
const createTest = async(req,res)=>{
    try{
       const{username,password}=req.body
       const newTest = await Test.create({username,password})
       res.status(200).json(newtest);
    }
    catch(error){
        res.status(500).json({
            error:"failed to create test user"
        })
    }   
}
const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}*/

//module.exports ={getTest,createTest,updateUser,deleteUser};
module.exports ={loginUser,registerUser};
