import { Router } from 'express';
import Repository from '../repository/matchRepository';
import MatchService from '../services/matchService';
import MatchController from '../controllers/matchController';

const router = Router();

const entityFactory = () => {
  const repository = new Repository();
  const service = new MatchService(repository);
  const controller = new MatchController(service);
  return controller;
};

router.get('/', (req, res, next) => {
  entityFactory().getAll(req, res, next);
});

export default router;
