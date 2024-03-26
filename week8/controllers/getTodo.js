/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import { client } from '../index.js';
import Todo from '../models/Todo.js';

export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    client.setEx('todos', 3600, JSON.stringify({
      data: todos,
      message: 'Successfully Got all the data',
    }));

    res.status(200).json({
      data: todos,
      message: 'Successfully Got all the data',
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: 'Server Error',
    });
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById({ _id: id });

    if (!todo) {
      return res.status(404).json({
        message: 'No Data Found with Given Id',
      });
    }

    client.setEx(`todo/${id}`, 3600, JSON.stringify({
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    }));

    res.status(200).json({
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: 'Server Error',
    });
  }
};
