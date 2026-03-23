const Chat = require('../models/Chat');
const { getCareerAdvice } = require('./aiController');

const getChatHistory = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user.id })
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const newChat = async (req, res) => {
  try {
    const { message } = req.body;
    const sessionId = new mongoose.Types.ObjectId().toString();
    
    const chat = await Chat.create({
      user: req.user.id,
      messages: [{ role: 'user', content: message }],
      sessionId,
    });

    // Get AI response
    const aiResponse = await getCareerAdvice({ body: { message } });
    
    chat.messages.push({
      role: 'assistant',
      content: aiResponse.advice,
    });
    await chat.save();

    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getChatHistory, newChat };