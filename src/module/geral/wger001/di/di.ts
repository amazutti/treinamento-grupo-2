import axios from "axios";
import { Wger001Controller } from "../controller/wger001Controller";
import { buscaFiliaisRepository } from "../data/repository/buscaFiliaisRepository";
import { buscaFiliaisUsecase } from "../domain/usecase/buscaFiliaisUsecase";

const axiosInstance = axios.create({
	baseURL: "https://consultros-auth-cgi.cgisoftware.com.br",
	headers: {
		"Content-Type": "application/json"
	}
})

const buscaFiliaisRepositoryImpl = buscaFiliaisRepository(axiosInstance)
const buscaFiliaisUseCaseImpl = buscaFiliaisUsecase(buscaFiliaisRepositoryImpl)
const wger001Controller = (context: any) => new Wger001Controller(context, buscaFiliaisRepositoryImpl)

export { wger001Controller }