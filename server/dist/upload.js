"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.storage = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const is_auth_1 = require("./middleware/is-auth");
const uuid_1 = require("uuid");
const listing_1 = require("./entities/listing");
const router = (0, express_1.Router)();
exports.storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        console.log("a");
        const uploadPath = path_1.default.join(__dirname, "../uploads/");
        fs_1.default.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        console.log("b");
        const name = (0, uuid_1.v4)();
        cb(null, `${name}${path_1.default.extname(file.originalname)}`);
    },
});
exports.upload = (0, multer_1.default)({
    limits: { fieldSize: 25 * 1024 * 1024 },
    storage: exports.storage,
    fileFilter: (_, file, callback) => {
        console.log("c");
        if (file.mimetype.includes("image") ||
            file.mimetype.includes("video")) {
            callback(null, true);
        }
        else {
            callback(new Error("Not an image or video"));
        }
    },
});
router.post("/post", is_auth_1.expressIsAuth, exports.upload.array("files", 16), async (req, res) => {
    if (!req.files) {
        res.status(200).json({ message: "No files uploaded" });
        return;
    }
    const filePaths = req.files.map((file) => {
        return path_1.default.join("uploads/", file.filename);
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
    const listing = await listing_1.Listing.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        sellerLocation: req.body.sellerLocation,
        properties: req.body.properties,
        creatorId: req.session.userId,
        attachments: filePaths,
    }).save();
    res.status(200).json(listing);
});
exports.default = router;
//# sourceMappingURL=upload.js.map