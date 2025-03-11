import express, { Request, Response} from "express";
import cors from "cors";
import router from "../routes/userRoutes";
import morgan from 'morgan'
export const app = express();


app.use(morgan('combined'));
app.use(cors({
    origin: "*", 
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/',router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Ping successfully" });
});

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Method and endpoint are not available" });
});

export default app;
