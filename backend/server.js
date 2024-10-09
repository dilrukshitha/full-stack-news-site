import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Create Express app
const app = express();
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To allow cross-origin requests

// Connect to MongoDB
const mongoURI = process.env.MONGO_URL;  // Your local MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define a schema for news
const newsSchema = new mongoose.Schema({
  category: String,
  title: String,
  content: String,
  author: String,
  date: { type: Date, default: Date.now },
});

// Create a model based on the schema
const News = mongoose.model('News', newsSchema);

// Routes
// Fetch all news for a specific category (e.g., Politics, Tech)
app.get('/news/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const news = await News.find({ category });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news' });
  }
});

// Add news articles to the database (for testing or admin purposes)
app.post('/news', async (req, res) => {
    const { category, title, content, author } = req.body;
  
    try {
      // Using create() instead of save()
      const savedArticle = await News.create({ category, title, content, author });
      res.json(savedArticle);
    } catch (err) {
      res.status(500).json({ message: 'Error saving article' });
    }
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
