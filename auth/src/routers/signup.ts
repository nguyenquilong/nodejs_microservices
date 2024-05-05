import express, { Router, Request, Response } from "express";
import { body, validationResult,  } from "express-validator";

import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const router = express.Router();

router.post(
  "/api/users/signup",
  [body("email").isEmail().withMessage("Email must be valid")],
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("must be 4 - 20"),
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())

      // throw new Error('Invalid email or password !')
      // return res.status(400).send(errors.array());
    }

    // const { email, password } = req.body;

    console.log("Creating user...");
    throw new DatabaseConnectionError()
    // throw new Error('Error conecting to database')
    
    res.send({});

    // if (!email || typeof email !== "string") {
    //   res.status(400).send("not email !");
    // }
  }
);

export { router as signUpRouter };
