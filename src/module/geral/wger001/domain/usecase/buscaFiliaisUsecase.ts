import { BuscaFiliaisRepository } from "../../data/repository/buscaFiliaisRepository";
import { Wger001 } from "../model/wger001";

interface BuscaFiliaisUseCase {
	(): Promise<Wger001[]>
}

const buscaFiliaisUsecase = (repository: BuscaFiliaisRepository) => async () => {
	return await repository()
}

export { buscaFiliaisUsecase, BuscaFiliaisUseCase }