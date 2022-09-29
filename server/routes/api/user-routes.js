const router = require("express").Router();
const {
    createUser,
    getSingleUser,
    login,
    createCardio,
    createResistance,
    getAllCardio,
    getCardioById,
    getAllResistance,
    getResistanceById,
    createGoals,
    getAllGoals,
} = require('../../controllers/usercontroller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);
