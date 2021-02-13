const router = require('express').Router();
const { 
    getAllThought, getThoughtById, createThought, addReaction, updateThought, deleteThought, deleteReaction 
} = require('../../controllers/thought-controller');

// GET and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// GET and PUT at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought);

// DELETE a thought by id and userId at /api/thoughts/:id/users/:userId
router
    .route('/:id/users/:userId')
    .delete(deleteThought);

// POST a reaction at /api/thoughts/:id/reactions
router
    .route('/:id/reactions')
    .post(addReaction);

// DELETE a reaction (and update thought) at /api/thoughts/:id/reactions/:reactionId
router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;