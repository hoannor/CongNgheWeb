import express from 'express'
import { registerController, loginController, testController, forgotPasswordController, updateProfileController, getAllOrdersController, getOrderController, orderStatusController, getAllUser, deleteUser } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'

// router object
export const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post(`/register`, registerController)


// LOGIN || POST
router.post('/login', loginController)

// Forgot password || POST
router.post('/forgot-password', forgotPasswordController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

// protected User route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
})

// protected Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true});
})

// API lấy danh sách người dùng
router.get('/users', requireSignIn, isAdmin, getAllUser);
  
// API xóa người dùng
router.delete('/users/:id', requireSignIn, isAdmin, deleteUser);
// update profile
router.put('/profile', requireSignIn, updateProfileController)

//orders
router.get('/orders',requireSignIn, getOrderController);
//all orders
router.get('/all-orders',requireSignIn, isAdmin, getAllOrdersController);
// order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController);
export default router
