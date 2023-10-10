const {tokenService} = require("../services");
/* ---------------- CREATE TOKEN IN JWT AND SAVE IN OUR DATA ---------------- */
const generateToken = async(req,res) => {
    try {
        const reqBody = req.body;

        /* ------------------------------ create token ------------------------------ */
        const token = await tokenService.createToken(reqBody);
        reqBody.token = token;

        /* ----------------------- save token in our database ----------------------- */
        const saveToken = await tokenService.saveToken(reqBody);
        res.status(200).json({
            success:true,
            message:"Token Created!",
            data:saveToken,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message || "Something went wrong!",
        });
    }
};
/* ----------------------------- VERIFY TO TOKEN ---------------------------- */
const verifyToken = async (req,res) => {
    res.status(200).json({
        success:true,
        message:"Token successfully verified!",
        data:req.user,
    });
};
module.exports = {
    generateToken,
    verifyToken
};