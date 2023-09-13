import Data from '../models/userModel.js'
const formHandle = async (req, res) => {
    const {fullname, email, pwd, conpwd, profilepic} = req.body;
    console.log({email});
    console.log(req.body.name);
    const user = await Data.findOne({ email });
    if (user) {
        const data = {'mes' : "User already Exist"};
        return res.send(data);
      }
    if(req.body.pwd != req.body.conpwd){
        const data = {'mes' : 'Password and confirm password not match.'};
        res.send(data);
    }
    else{
        try {
            const data =  new Data();
            data.fullname = req.body.fullname;
            data.email = req.body.email; 
            data.password = req.body.pwd;
            data.profilepic = req.body.profilepic   
            data.save();
            res.send(data);
            console.log(data);
        }
        catch(error){
            console.log(error);
        }
    }
}

export default formHandle