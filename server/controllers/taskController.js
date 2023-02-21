import pool from "../db.js";

//Create a plan
export const createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const { title } = req.body;
    const newTask = await pool.query("INSERT INTO todo (description,title) VALUES ($1,$2) RETURNING *",
      [description, title])
    res.status(200).json(newTask.rows[0])
  } catch (error) {
    res.status(500).json({ error })
  }
}

//Get all Task
export const getTask = async (req, res) => {
  try {
    const allTask = await pool.query("SELECT * FROM todo");
    res.status(200).json(allTask.rows)
  } catch (error) {
    res.status(500).json({ error })
  }
}

//Get single Task
export const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const Task = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.status(200).json(Task.rows[0])
  } catch (error) {
    res.status(500).json({ error })
  }
}

//Update a Task
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const { title } = req.body;
    const updateTask = await pool.query("UPDATE todo SET description = $1, title = $2 WHERE todo_id = $3",
      [description, title, id])
    res.status(200).json("Task was updated!")
  } catch (error) {
    res.status(500).json({ error })
  }
}

//Delete a Task
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.status(200).json("Task was deleted!")
  } catch (error) {
    res.status(500).json({ error })
  }
}