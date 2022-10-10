import expressAsyncHandler from "express-async-handler";
//welcome
export const welcome = expressAsyncHandler((req, res) => {
  res.send("welcome to task manager server");
});
