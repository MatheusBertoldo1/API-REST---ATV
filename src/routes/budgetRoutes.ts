import { Router } from 'express';
import { BudgetController } from '../controllers/budgetController.js';

const router: Router = Router();

router.get('/budgets', BudgetController.getAll);
router.get('/budgets/:id', BudgetController.getById);
router.post('/budgets', BudgetController.create);
router.put('/budgets/:id', BudgetController.update);
router.delete('/budgets/:id', BudgetController.delete);

export default router;
