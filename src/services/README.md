# Serviços de API

Esta pasta contém a configuração e funções para comunicação com o backend.

## Estrutura

```
services/
├── api.ts          # Configuração do axios e funções da API
├── types.ts        # Tipos TypeScript
├── index.ts        # Exportações centralizadas
└── README.md       # Este arquivo
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure a URL do backend no arquivo `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

## Uso Básico

### Importando a API

```typescript
import { sendContactForm, getData, postData } from '@/services';
import type { ContactFormData } from '@/services';
```

### Enviando Formulário de Contato

```typescript
import { sendContactForm } from '@/services';
import type { ContactFormData } from '@/services';

const handleSubmit = async (data: ContactFormData) => {
  try {
    const response = await sendContactForm(data);
    console.log('Sucesso:', response);
  } catch (error) {
    console.error('Erro:', error);
  }
};
```

### Fazendo Requisições Genéricas

#### GET
```typescript
import { getData } from '@/services';

const users = await getData<User[]>('/users');
```

#### POST
```typescript
import { postData } from '@/services';

const newUser = await postData<User, CreateUserDto>('/users', {
  name: 'João',
  email: 'joao@example.com'
});
```

#### PUT
```typescript
import { putData } from '@/services';

const updated = await putData<User, UpdateUserDto>('/users/123', {
  name: 'João Silva'
});
```

#### DELETE
```typescript
import { deleteData } from '@/services';

await deleteData('/users/123');
```

## Interceptors

A instância do axios possui interceptors configurados que:

- **Request**: Loga todas as requisições e pode adicionar tokens de autenticação
- **Response**: Loga todas as respostas e trata erros globalmente

## Tipos

Todos os tipos estão definidos em `types.ts` e podem ser importados:

```typescript
import type {
  ContactFormData,
  ContactResponse,
  ApiSuccessResponse,
  ApiErrorResponse,
  User,
  Project
} from '@/services';
```

## Tratamento de Erros

Todas as funções fazem tratamento de erros e retornam mensagens apropriadas:

```typescript
try {
  const response = await sendContactForm(data);
  // Sucesso
} catch (error) {
  // error.message contém a mensagem de erro
  console.error(error.message);
}
```

## Exemplo Completo com React

```typescript
import { useState } from 'react';
import { sendContactForm } from '@/services';
import type { ContactFormData } from '@/services';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: ContactFormData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await sendContactForm(formData);
      console.log('Formulário enviado com sucesso:', response);
      alert('Mensagem enviada com sucesso!');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMessage);
      console.error('Erro ao enviar:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    // Seu componente aqui
  );
};
```
