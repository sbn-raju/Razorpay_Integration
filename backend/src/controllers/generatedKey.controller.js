import dotenv from "dotenv";

dotenv.config();

const genetratedKeyController = (req,res)=>{
    return res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_KEY_ID
    })
}

export {
    genetratedKeyController
}