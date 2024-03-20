const router = require('express').Router();
const {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser
} = require('../controllers/users')

router.get('/users', getUsers);
router.get('/users/:user id', getUser);
router.post('/users', createUser);
router.patch('/users/:user id', updateUser);
router.delete('/users/:user id', deleteUser);

module.exports = router;