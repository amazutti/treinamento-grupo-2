import { Wger001 } from "../domain/model/wger001";
import { BuscaFiliaisUseCase } from "../domain/usecase/buscaFiliaisUsecase";

class Wger001Controller {
	filiais: Wger001[] = []
	carregando: boolean = false

	constructor(
		private context:any,
		private buscaFiliaisUsecase: BuscaFiliaisUseCase
	){}

	async mounted() {
		this.carregando = true
		this.filiais = await this.buscaFiliaisUsecase()
		this.carregando = false
	}
}

export { Wger001Controller }