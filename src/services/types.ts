// Tipos relacionados aos serviços da API

export interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  empresa: string;
  tipoProjeto: string;
  mensagem: string;
}

export interface ContactResponse {
  id: string;
  createdAt: string;
}

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

// Adicione mais tipos conforme necessário
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}
