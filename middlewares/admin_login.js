import jwt from "jsonwebtoken";

export const adminLogin = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("/admin/");
    }

    const tokenData = jwt.verify(
      token,
      process.env.JWT_SECRET,
    );
    req.role=tokenData.role
    req.fullname = tokenData.fullname;
    
    next();
  } catch (error) {
    res.status(401).send("Unauthorized invalid token");
  }
};
       

