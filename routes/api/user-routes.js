const router = require('express').Router();
const { 
    getAllUser, getUserById, createUser, updateUser, deleteUser, addFriend, deleteFriend 
} = require('../../controllers/user-controller');

// GET and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// GET PUT and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST and DELETE at /api/users/:id/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;