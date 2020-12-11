import express, { Request, Response } from "express";

import { ApiResponse, User } from "@shared/models";
import { usersStore } from "@server/db/users";

const router = express.Router();

router.get("/:id", (req: Request, res: Response<ApiResponse<User>>) => {
  const body: ApiResponse<User> = {};
  const id = parseInt(req.params.id);

  if (!id) {
    body.error = `invalid user id: '${req.params.id}'`;
    return res.status(400).send(body);
  }

  body.data = usersStore.get(id);
  return res.json(body);
});

export default router;
