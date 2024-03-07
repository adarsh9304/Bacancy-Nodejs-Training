const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
            const todos = await Todo.find({});

            res.status(200).json({
                data:todos,
                message:"Sucessfully Got all the data",
            });
    }
    catch(err) {
        res.status(500).json({
            error:err.message,
            message:'Server Error',
        });
       
    }
}

exports.getTodoById = async(req, res) => {
    try {
       const id = req.params.id;
       const todo = await Todo.findById( {_id: id})

       if(!todo) {
        return res.status(404).json({
            message:"No Data Found woth Given Id",
        })
       }

       res.status(200).json({
        data:todo,
        message: `Todo ${id} data successfully fetched`,
       })

    }
    catch(err) {
        res.status(500).json({
            error:err.message,
            message:'Server Error',
        });
    
    }
}