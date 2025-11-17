import axios, { AxiosInstance, AxiosError } from "axios"
import type {
  ContactFormData,
  ContactResponse,
  ApiSuccessResponse,
  ApiErrorResponse,
} from "./types"

// ===== CONFIGURAÇÃO DA API =====

// URL base do backend (ajuste conforme necessário)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api"

// Criação da instância do axios
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 segundos
  headers: {
    "Content-Type": "application/json",
  },
})

// ===== INTERCEPTORS =====

// Interceptor de requisição (adiciona token, logs, etc)
api.interceptors.request.use(
  (config) => {
    // Você pode adicionar token de autenticação aqui se necessário
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error("[API Request Error]", error)
    return Promise.reject(error)
  }
)

// Interceptor de resposta (trata erros globalmente)
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.config.url}`, response.data)
    return response
  },
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      // Erro de resposta do servidor
      console.error("[API Error]", error.response.status, error.response.data)
    } else if (error.request) {
      // Requisição foi feita mas não houve resposta
      console.error("[API Error] Sem resposta do servidor")
    } else {
      // Erro ao configurar a requisição
      console.error("[API Error]", error.message)
    }
    return Promise.reject(error)
  }
)

// ===== FUNÇÕES DA API =====

/**
 * Envia os dados do formulário de contato para o backend
 * @param data - Dados do formulário de contato
 * @returns Promise com a resposta do servidor
 */
export const sendContactForm = async (
  data: ContactFormData
): Promise<ApiSuccessResponse<ContactResponse>> => {
  try {
    const response = await api.post<ApiSuccessResponse<ContactResponse>>(
      "/contact",
      data
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      throw new Error(
        axiosError.response?.data?.message || "Erro ao enviar formulário"
      )
    }
    throw new Error("Erro desconhecido ao enviar formulário")
  }
}

/**
 * Exemplo de outras funções da API
 */

// GET - Buscar dados
export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await api.get<ApiSuccessResponse<T>>(endpoint)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      throw new Error(
        axiosError.response?.data?.message || "Erro ao buscar dados"
      )
    }
    throw new Error("Erro desconhecido ao buscar dados")
  }
}

// POST - Criar dados
export const postData = async <T, D = unknown>(
  endpoint: string,
  data: D
): Promise<T> => {
  try {
    const response = await api.post<ApiSuccessResponse<T>>(endpoint, data)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      throw new Error(
        axiosError.response?.data?.message || "Erro ao criar dados"
      )
    }
    throw new Error("Erro desconhecido ao criar dados")
  }
}

// PUT - Atualizar dados
export const putData = async <T, D = unknown>(
  endpoint: string,
  data: D
): Promise<T> => {
  try {
    const response = await api.put<ApiSuccessResponse<T>>(endpoint, data)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      throw new Error(
        axiosError.response?.data?.message || "Erro ao atualizar dados"
      )
    }
    throw new Error("Erro desconhecido ao atualizar dados")
  }
}

// DELETE - Deletar dados
export const deleteData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await api.delete<ApiSuccessResponse<T>>(endpoint)
    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiErrorResponse>
      throw new Error(
        axiosError.response?.data?.message || "Erro ao deletar dados"
      )
    }
    throw new Error("Erro desconhecido ao deletar dados")
  }
}

export default api
