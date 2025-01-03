const authController={
    register: async(req,res)=>{
        try{
            res.json({message:"User registered successfully"})
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    }
}

module.exports = authController;