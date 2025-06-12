import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

// settings
const app = express();
// midddleware
app.use(express.json());

const corsOptions = {
  
  methods: ["GET"],
};
app.use(cors(corsOptions));

// routes
app.use("/api/users", userRoutes);
app.get('/buscar-producto',(req,res)=>{

})
// listener
app.listen(5000, () => console.log("servidor corriendo"));
