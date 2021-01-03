// newChat function with dummy response.
const newChat = (req, res, next) => {
    res.json({ message: 'New Chat Created.' });
};

const getChats = (req, res, next) => {
    res.json({ message: 'All Chats Retrieved' });
};

const deleteChats = (req, res, next) => {
    res.json({ message: 'All Chats Deleted' });
};

const getSingleChat = (req, res, next) => {
    res.json({ message: 'Single Chat Retrieved' });
};

const deleteSingleChat = (req, res, next) => {
    res.json({ message: 'Single Chat Deleted' });
};

const addMessage = (req, res, next) => {
    res.json({ message: 'Message added to Chat' });
};

// Export all controller functions for use through app
module.exports = {
    newChat,
    getChats,
    deleteChats,
    getSingleChat,
    deleteSingleChat,
    addMessage
};