/* 
  This User Controller,
    - Request -> Service a pathay
    - Response er format maintain kore
*/

/*
  Open Settings.json file Keyboard Shortcut
  Ctrl + Shift + P
  Command + Shift + P
*/

import { addUser, getAllUsers } from "../services/user.service.js"

export const getUsers = (_req, res) => {  // "_" is used for optional parameters
  const users = getAllUsers();

  res.status(200).json({
    success: true,
    data: users
  })
}

export const createUser = (req, res) => {
  // console.log(req.body);
  const newUser = addUser(req.body);

  res.status(201).json({
    success: true,
    data: newUser
  })
}