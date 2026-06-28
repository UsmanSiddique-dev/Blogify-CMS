import CommentModel from "../models/comments.model.js"


export const allComments = async (req, res) => {
    res.render("admin/comments/index",{role:req.role} )
}