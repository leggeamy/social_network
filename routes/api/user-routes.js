const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// /users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// /users/:userid
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// /users/:userid/friends
router
.post(createFriend);

// /users/:userid/friends/:friendid
router
.delete(deleteFriend);


module.exports = router;    