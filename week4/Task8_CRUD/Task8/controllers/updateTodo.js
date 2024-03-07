const Todo = require("../models/Todo");

exports.updateTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description},
        )

        res.status(200).json({
            data:todo,
            message: `Updated Successfully`,
           })
            
    }
    catch(err) {res.status(500)
        .json({
            error:err.message,
            message:'Server Error',
        });
    }
}