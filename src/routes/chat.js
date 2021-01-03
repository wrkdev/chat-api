const express = require('express');
const router  = express.Router(); 

// Import Controller
const chatController = require('../controllers/chat'); 

// First Route
router.post('/chat', chatController.newChat);
router.get('/chat', chatController.getChats);
router.delete('/chat', chatController.deleteChats);

router.get('/chat:id', chatController.getSingleChat);
router.delete('/chat:id', chatController.deleteSingleChat);
router.post('/chat:id', chatController.addMessage);

module.exports = router; // Export all routes for use in the server.js