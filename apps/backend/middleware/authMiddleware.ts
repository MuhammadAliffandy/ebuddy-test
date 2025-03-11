import { admin } from "../config/firebaseConfig";
import { Request , Response , NextFunction} from "express";

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
        res.status(401).json({
            message: "Authorization header is missing",
        });
        return 
    }

    const token = authorizationHeader.replace("Bearer ", "");

    try {

        const decoded = await admin.auth().verifyIdToken(token);

        const now = Math.floor(Date.now() / 1000);
        if (decoded.exp - now < 60 * 30) {
            const newToken = await admin.auth().createCustomToken(decoded.uid);
            res.setHeader("Authorization", `Bearer ${newToken}`);
        }

        (req as any).user = decoded; 
        next()

    } catch (error) {
        res.status(401).json({
            message: (error as Error).message || "Invalid or expired token",
        });
        return 
    }
};


export default authorization;