import { Router } from "express";

const router = Router()

router.post('api/user/signin', (req, res) => {
    res.send('Hi there !')
})

export {router as signInRouter}