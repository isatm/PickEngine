import express from "express"
import userRouter from "./users_router.js"

export const routerApi = (app) => {
  const router = express.Router()

  app.use("/api", router)

  router.use('/user', userRouter)

}
