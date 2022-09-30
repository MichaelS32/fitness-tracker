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

router.route('/cardio').post(createCardio).get(getAllCardio);
router.route('/cardio/:id').get(getCardioById);

router.route('/resistance').post(createResistance).get(getAllResistance);
router.route('/resistance/"id').get(getResistanceById);

router.route('/goal').post(createGoals).get(getAllGoals);

module.exports = router;