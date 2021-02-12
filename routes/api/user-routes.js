const router = require('express').Router();
const { getAllUser, getUserById, createUser } = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:id')
    .get(getUserById);

module.exports = router;