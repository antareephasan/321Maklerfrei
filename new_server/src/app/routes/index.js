const express = require("express");
const router = express.Router();
const AuthRoutes = require("../modules/auth/auth.routes");
const UserRoutes = require("../modules/user/user.routes");
const AdminRoutes = require("../modules/admin/admin.routes");  
const DashboardRoutes = require("../modules/dashboard/dashboard.routes");
const PaymentRoutes = require("../modules/payment/payment.routes");  
// Define routes--------------------
const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,  
  },  
  {
    path: "/dashboard",
    route: DashboardRoutes,
  }, 
  {
    path: "/payment",
    route: PaymentRoutes,
  },
];

// Apply routes to the router
moduleRoutes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
