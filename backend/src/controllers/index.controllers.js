const indexController = (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"This is the home Page"
    })
}


export {
    indexController
}