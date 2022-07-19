import { Router } from 'express';
import LeaderboardService from '../services/leaderboardService';
import LeaderboardController from '../controllers/leaderboardController';

const router = Router();

const entityFactory = () => {
  const service = new LeaderboardService();
  const controller = new LeaderboardController(service);
  return controller;
};

router.get('/home', (req, res, next) => {
  entityFactory().getAllHome(req, res, next);
});

router.get('/away', (req, res, next) => {
  entityFactory().getAllAway(req, res, next);
});

export default router;
