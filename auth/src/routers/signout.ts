import { Router } from "express";

const router = Router()

router.post('api/user/signout', (req, res) => {
    res.send('Hi there !')
})

export {router as signOutRouter}