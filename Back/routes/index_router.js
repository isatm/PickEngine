import express from "express"

import userRouter from "./users_router.js"
import publicationRouter from "./publications_router.js"

import loginRouter from "./login_router.js"

export const routerApi = (app) => {
  const dbRouter = express.Router()
  const authRouter = express.Router()

  app.use("/api", dbRouter)
  app.use("/auth", authRouter)

  dbRouter.use('/user', userRouter)
  dbRouter.use('/post', publicationRouter)

  authRouter.use('/login', loginRouter)

}
