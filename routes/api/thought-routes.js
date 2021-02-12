const router = require('express').Router();
const { 
    getAllThought, getThoughtById, createThought, addReaction, updateThought, deleteThought, deleteReaction 
} = require('../../controllers/thought-controller');

// GET and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// GET PUT and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST and DELETE reactions at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

module.exports = router;