const getUsers = (request, response) => {
   //get users
};

const getUser = (request, response) => {
   //get user
   const { user_id } = request.params;
   response.status(200);
   response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
   //create new user
};

const updateUser = (request, response) => {
   //update user
};

const deleteUser = (request, response) => {
   //delete user
};

module.exports = {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser
}