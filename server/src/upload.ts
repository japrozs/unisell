import { Router } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from "fs";
import { expressIsAuth } from "./middleware/is-auth";
import { v4 as uuidv4 } from "uuid";
import { Listing } from "./entities/listing";

const router = Router();

// Define the local storage for multer
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("a");
        const uploadPath = path.join(__dirname, "../uploads/");

        // Ensure the directory exists
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        console.log("b");
        const name = uuidv4();
        cb(null, `${name}${path.extname(file.originalname)}`);
    },
});

export const upload = multer({
    limits: { fieldSize: 25 * 1024 * 1024 },
    storage,
    fileFilter: (_, file: any, callback: FileFilterCallback) => {
        console.log("c");
        if (
            file.mimetype.includes("image") ||
            file.mimetype.includes("video")
        ) {
            callback(null, true);
        } else {
            callback(new Error("Not an image or video"));
        }
    },
});

router.post(
    "/post",
    expressIsAuth,
    upload.array("files", 16),
    async (req, res) => {
        if (!req.files) {
            res.status(200).json({ message: "No files uploaded" });
            return;
        }

        const filePaths = (req.files as Express.Multer.File[]).map((file) => {
            return path.join("uploads/", file.filename);
        });

        if (req.body.title.trim().length === 0) {
            res.status(200).json({ message: "Title cannot be empty" });
            return;
        }
        if (req.body.description.trim().length === 0) {
            res.status(200).json({ message: "Description cannot be empty" });
            return;
        }
        if (req.body.price.trim().length === 0) {
            res.status(200).json({ message: "Price cannot be empty" });
            return;
        }
        if (req.body.sellerLocation.trim().length === 0) {
            res.status(200).json({
                message: "Seller Location cannot be empty",
            });
        }
        if (req.body.Properties.trim().length === 0) {
            res.status(200).json({
                message: "A mininum of one property is required",
            });
        }

        console.log(filePaths);
        console.log(req.body.title);
        console.log(req.body.description);
        console.log(req.body.price);
        console.log(req.body.sellerLocation);
        console.log(req.body.properties);

        const listing = await Listing.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            sellerLocation: req.body.sellerLocation,
            properties: req.body.properties,
            creatorId: req.session.userId,
            attachments: filePaths,
        }).save();

        res.status(200).json(listing);
    }
);

// router.post(
//     "/post",
//     expressIsAuth,
//     upload.array("files", 4), // Accept up to 4 files
//     async (req, res) => {
//         if (!req.files) {
//             return res.status(200).json({ message: "No files uploaded" });
//         }

//         const filePaths = (req.files as Express.Multer.File[]).map((file) => {
//             return path.join("uploads/", file.filename);
//         });

//         const post = await Post.create({
//             body: req.body.body,
//             creatorId: req.session.userId,
//             attachments: filePaths,
//         }).save();

//         return res.status(200).json(post);
//     }
// );

// router.post(
//     "/update",
//     expressIsAuth,
//     upload.array("files", 4), // Accept up to 4 files
//     async (req, res) => {
//         if (!req.files) {
//             return res.status(200).json({ message: "No files uploaded" });
//         }

//         const filePaths = (req.files as Express.Multer.File[]).map((file) => {
//             return path.join("uploads/", file.filename);
//         });

//         console.log(filePaths);

//         const post = await Post.update(
//             { id: req.body.postId, creatorId: req.session.userId },
//             {
//                 body: req.body.body,
//                 attachments: filePaths,
//             }
//         );

//         return res.status(200).json(post);
//     }
// );

// router.post("/bg", expressIsAuth, upload.single("file"), async (req, res) => {
//     console.log("req.file :: ", req.file);
//     if (!req.file) {
//         return res.status(200).json({ message: "No files uploaded" });
//     }

//     const user = await User.update(
//         { id: req.session.userId },
//         {
//             bg: path.join("uploads/", req.file?.filename || ""),
//         }
//     );

//     return res.status(200).json(user);
// });

// router.post(
//     "/avatar",
//     expressIsAuth,
//     upload.single("file"),
//     async (req, res) => {
//         if (!req.file) {
//             return res.status(200).json({ message: "No files uploaded" });
//         }

//         console.log("req.file :: ", req.file);

//         const user = await User.update(
//             { id: req.session.userId },
//             {
//                 avatar: path.join("uploads/", req.file?.filename || ""),
//             }
//         );

//         return res.status(200).json(user);
//     }
// );

export default router;
