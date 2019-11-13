import multer from "multer";
import routes from "./routes";

const upload = multer({ dest: "uploads/videos/" });

export const localsmiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthentication: false,
    id: 1
  };
  next();
};

export const uploadVideo = upload.single("videoFile");
