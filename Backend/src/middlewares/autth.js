const adminAuth = (req,res,next)=>{
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    isAdminAuthorized?next():res.status(401).send("unAuthorized User");
next()

}
module.exports = {adminAuth}