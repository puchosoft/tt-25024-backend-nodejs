import express from "express";
import userRoutes from './routes/users.routes.js'

// settings
const app = express();
// midddleware
app.use(express.json())


// routes
app.use('/api/users',userRoutes)


// listener
app.listen(5000, () => console.log("servidor corriendo"));
