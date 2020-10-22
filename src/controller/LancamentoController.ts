import { getManager } from "typeorm";
import { Lancamento } from "../entity/Lancamento";

interface ILancamentoProps{
  lancamento: Lancamento
}

export class LancamentoController {
  async save ({lancamento}:ILancamentoProps): Promise<Lancamento> {
    const newLancamento = await getManager().save(lancamento)
    return newLancamento
  }
}