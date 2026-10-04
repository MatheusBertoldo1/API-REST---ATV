import { Request, Response } from 'express';
import { Budget } from '../models/budgetsModel.js';

export class BudgetController {
  // Listar todos os orçamentos
  public static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const budgets = await Budget.findAll();
      return res.status(200).json(budgets);
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno ao buscar orçamentos', error });
    }
  }

  // GET Buscar por ID
  public static async getById(req: Request, res: Response): Promise<Response> {
    try {
      const budgetId = Number(req.params.id);

      if (isNaN(budgetId)) {
        return res.status(400).json({ message: 'ID em formato inválido' });
      }

      const budget = await Budget.findByPk(budgetId);

      if (!budget) {
        return res.status(404).json({ message: 'Orçamento não encontrado' });
      }

      return res.status(200).json(budget);
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno ao buscar o orçamento', error });
    }
  }

  // POST Criar novo orçamento
  public static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { movieTitle, department, allocatedAmount, spentAmount, status } = req.body;

      if (!movieTitle || !department || allocatedAmount === undefined) {
        return res.status(400).json({
          message: 'Campos obrigatórios ausentes: movieTitle, department, allocatedAmount',
        });
      }

      const newBudget = await Budget.create({
        movieTitle,
        department,
        allocatedAmount,
        spentAmount: spentAmount ?? 0,
        status: status ?? 'PENDING',
      });

      return res.status(201).json(newBudget);
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno ao criar orçamento', error });
    }
  }

  // PUT Atualizar orçamento 
  public static async update(req: Request, res: Response): Promise<Response> {
    try {
      const budgetId = Number(req.params.id);

      if (isNaN(budgetId)) {
        return res.status(400).json({ message: 'ID em formato inválido' });
      }

      const budget = await Budget.findByPk(budgetId);

      if (!budget) {
        return res.status(404).json({ message: 'Orçamento não encontrado' });
      }

      await budget.update(req.body);
      return res.status(200).json(budget);
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno ao atualizar orçamento', error });
    }
  }

  // DELETE Remover orçamento
  public static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const budgetId = Number(req.params.id);

      if (isNaN(budgetId)) {
        return res.status(400).json({ message: 'ID em formato inválido' });
      }

      const budget = await Budget.findByPk(budgetId);

      if (!budget) {
        return res.status(404).json({ message: 'Orçamento não encontrado' });
      }

      await budget.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Erro interno ao remover orçamento', error });
    }
  }
}