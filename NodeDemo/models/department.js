const Department = require('../schema/department'); // Assuming the Department model is exported from another file

// Controller function to get all departments
const getAllDepartments = async () => {
  try {
    const departments = await Department.find();
    return departments;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller function to get a department by ID
const getDepartmentById = async (departmentId) => {
  try {
    const department = await Department.findById(departmentId);
    return department;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller function to create a new department
const createDepartment = async (name) => {
  try {
    const department = new Department({
      name,
    });
    const newDepartment = await department.save();
    return newDepartment;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller function to update a department by ID
const updateDepartment = async (departmentId, updatedData) => {
  try {
    const department = await Department.findByIdAndUpdate(
      departmentId,
      updatedData,
      { new: true }
    );
    return department;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Controller function to delete a department by ID
const deleteDepartment = async (departmentId) => {
  try {
    const department = await Department.findByIdAndRemove(departmentId);
    return department;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getAllDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};