/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import Todo from '../models/Todo.js';

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    await Todo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Todo DELETED',
    });
  } catch (err) {
    res.status(500)
      .json({
        success: false,
        error: err.message,
        message: 'Server Error',
      });
  }
};
