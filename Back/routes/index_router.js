import express from "express"

import userRouter from "./users_router.js"
import productRouter from "./products_router.js"
import publicationRouter from "./publications_router.js"
import questionRouter from "./ia_conversation_router.js"

import loginRouter from "./login_router.js"

export const routerApi = (app) => {
  const dbRouter = express.Router()
  const authRouter = express.Router()
  const iaRouter = express.Router()

  app.use("/api", dbRouter)
  app.use("/auth", authRouter)
  app.use("/ia", iaRouter)
  

  dbRouter.use('/user', userRouter)
  dbRouter.use('/post', publicationRouter)
  dbRouter.use('/product', productRouter)

  authRouter.use('/login', loginRouter)

  iaRouter.use('/ask', questionRouter)

}
