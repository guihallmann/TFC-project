import { Router } from 'express';
import Repository from '../repository/teamRepository';
import TeamService from '../services/teamService';
import TeamController from '../controllers/teamController';

const router = Router();

const entityFactory = () => {
  const repository = new Repository();
  const service = new TeamService(repository);
  const controller = new TeamController(service);
  return controller;
};

router.get('/', (req, res, next) => {
  entityFactory().getAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  entityFactory().getById(req, res, next);
});

export default router;
