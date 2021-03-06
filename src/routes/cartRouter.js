const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/cart/:user_user_id', cartController.getCart);
router.post('/insert/:book_id/:book_price/:user_user_id', cartController.insertCart);
router.get('/cart/order/:cart_id', cartController.getOrderCartPage);


//delete item 1
router.get('/cart/delete/:cart_id/:book_id', cartController.deleteLine);



module.exports=router;
