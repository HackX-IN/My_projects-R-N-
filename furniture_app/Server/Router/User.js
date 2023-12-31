const router = require('express').Router();
const UserControllers = require('../Controllers/User');

router.post('/register', UserControllers.register);
router.post('/user/login', UserControllers.login);
router.get('/user/:id', UserControllers.getById);
router.post('/user/:userId/wishlist/:productId', UserControllers.addToWishlist);
router.delete('/user/:userId/wishlist/:productId', UserControllers.removeFromWishlist);
router.get('/user/:userId/wishlist', UserControllers.getWishlist);



module.exports = router;
