const express = require('express');
const router = express.Router();
const departmentController = require('../models/department');

// Route to get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await departmentController.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get a department by ID
router.get('/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const department = await departmentController.getDepartmentById(departmentId);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to create a new department
router.post('/create', async (req, res) => {
  try {
    const { name } = req.body;
    const newDepartment = await departmentController.createDepartment(name);
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a department by ID
router.put('/edit/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const updatedData = req.body;
    const updatedDepartment = await departmentController.updateDepartment(departmentId, updatedData);
    if (!updatedDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json(updatedDepartment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a department by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const departmentId = req.params.id;
    const deletedDepartment = await departmentController.deleteDepartment(departmentId);
    if (!deletedDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;