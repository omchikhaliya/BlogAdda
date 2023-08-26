
const formHandle = async (req, res) => {
    console.log(req.body.name);
    const data = {name: "Om"};    
    try {

        res.send(data);
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

export default formHandle;