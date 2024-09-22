import express, { Router } from 'express';
import devRoute from './dev.route';
import userRoute from './user.route';
import clientRoute from './client.route';
import userRegisterRequestRoute from './user_register_requst.route';
import orderRoute from './order.route';
import config from '../../config/config';
import docsRoute from './docs.route';

const router: Router = express.Router();

interface defaultRoutesObj {
  path: string;
  route: Router;
}
const defaultRoutes:defaultRoutesObj[] = [
  { path: '/dev', route: devRoute },
  { path: '/user', route: userRoute },
  { path: '/client', route: clientRoute },
  { path: '/user_register_request', route: userRegisterRequestRoute },
  { path: '/order', route: orderRoute },
];

// routes available only in development mode
const devRoutes = [
  { path: '/docs', route: docsRoute },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

export default router;