const express = require('express');
const router = express.Router();

const {
	getCategoryById,
	createCategory,
	getAllCategories,
	getCategory,
	upadteCategory,
	removeCategory,
} = require('../controllers/category');
const { isAuthenticated, isSignedIn, isAdmin } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');

//params
router.param('userId', getUserById);
router.param('categoryId', getCategoryById);

//actual routes

//create
router.post(
	'/category/create/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	createCategory
);

//read
router.get('/category/:categoryId', getCategory);
router.get('/categories', getAllCategories);

//update
router.put(
	'/category/:categoryId/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	upadteCategory
);

//delete
router.delete(
	'/category/:categoryId/:userId',
	isSignedIn,
	isAuthenticated,
	isAdmin,
	removeCategory
);

module.exports = router;
