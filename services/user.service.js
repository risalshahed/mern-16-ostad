/* 
  This User Service,
    - is actual Data Handling / Business Logic
    - keeps the "controller" clean
*/

let users = [];

// Return All Users
// export const getAllUsers = () => users;
export const getAllUsers = () => {
  return users;
}

// Add a New User
export const addUser = user => {
  /* 
    user = {
      name: 'User er Name',
      email: 'User er Email',
    }
  */

  const newUser = {
    // id: Date.now(),
    id: crypto.randomUUID(),
    ...user
  }

  users.push(newUser);  // All Users eikhane Update hosse

  return newUser;
}