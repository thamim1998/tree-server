import express from "express";
import cors from "cors";
import folderRoutes from "./routes/folderRoutes";

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/folders", folderRoutes); // Use folder routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});