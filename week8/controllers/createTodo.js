/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import Todo from '../models/Todo.js';

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });

    res.status(200).json({
      data: response,
      message: 'Entry Created Successfully',
    });
  } catch (err) {
    res.status(500).json({
      data: 'internal server error',
      message: err.message,
    });
  }
};
