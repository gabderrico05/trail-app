# API Module

Este módulo centraliza toda a comunicação com o backend da aplicação Trilha Interativa.

## Estrutura

```
lib/api/
├── client.ts              # Cliente Axios configurado
├── index.ts               # Ponto de entrada unificado
└── services/
    ├── entities.ts        # Serviço de entidades/parques
    └── trails.ts          # Serviço de trilhas
```

## Como Usar

### Importação

```typescript
import { api, getImageUrl } from '@/lib/api';
```

### Buscar Entidades/Parques

```typescript
// Buscar todas as entidades
try {
  const entities = await api.entities.getAll();
  console.log(entities); // EntityProps[]
} catch (error: any) {
  Alert.alert('Erro', error.message);
}

// Buscar entidade por ID
const entity = await api.entities.getById(1);
```

### Buscar Trilhas

```typescript
// Buscar todas as trilhas
const trails = await api.trails.getAll();

// Buscar trilhas filtradas por entidade
const trails = await api.trails.getAll({ entityId: 1 });

// Buscar trilha por ID
const trail = await api.trails.getById(1);
```

### URLs de Imagens

O backend retorna caminhos relativos para imagens. Use a função `getImageUrl()` para construir URLs completas:

```typescript
const entity = await api.entities.getById(1);

// entity.coverUrl pode ser "/images/park123.jpg" ou null
const fullImageUrl = getImageUrl(entity.coverUrl);
// Retorna: "https://cdn.example.com/images/park123.jpg" ou null
```

## Tratamento de Erros

Todos os serviços lançam erros com a seguinte estrutura:

```typescript
{
  message: string;      // Mensagem de erro em português
  statusCode?: number;  // Código HTTP (se disponível)
  code?: string;        // Código de erro do axios
}
```

**Sempre envolva chamadas de API em try/catch:**

```typescript
try {
  const data = await api.entities.getAll();
  setEntities(data);
} catch (error: any) {
  Alert.alert(
    'Erro',
    error?.message || 'Ocorreu um erro inesperado.'
  );
}
```

## Adicionando Novos Endpoints

### 1. Criar/Atualizar Types

Adicione ou atualize interfaces em `types/`:

```typescript
// types/Landmark.ts
export interface LandmarkProps {
  id: number;
  name: string;
  description: string;
  // ... outros campos
}
```

### 2. Criar Novo Service

Crie um arquivo em `lib/api/services/`:

```typescript
// lib/api/services/landmarks.ts
import { LandmarkProps } from "@/types/Landmark";
import { apiClient } from "../client";

export interface ListLandmarksResponse {
  message: string;
  landmarks: LandmarkProps[];
}

export const landmarksService = {
  async getAll(): Promise<LandmarkProps[]> {
    const { data } = await apiClient.get<ListLandmarksResponse>("/landmarks");
    return data.landmarks;
  },

  async getById(id: number): Promise<LandmarkProps> {
    const { data } = await apiClient.get<{ message: string; landmark: LandmarkProps }>(
      `/landmarks/${id}`
    );
    return data.landmark;
  },
};
```

### 3. Exportar no Index

Atualize `lib/api/index.ts`:

```typescript
export { landmarksService } from "./services/landmarks";

export const api = {
  entities: entitiesService,
  trails: trailsService,
  landmarks: landmarksService, // Adicionar aqui
};
```

### 4. Usar no Componente

```typescript
import { api } from '@/lib/api';

const landmarks = await api.landmarks.getAll();
```

## Configuração

### Variáveis de Ambiente

As seguintes variáveis devem estar definidas no arquivo `.env`:

- `EXPO_PUBLIC_API_URL` - URL base da API (ex: `https://api.trilhainterativa.com.br`)
- `EXPO_PUBLIC_IMAGE_BASE_URL` - URL base para imagens (ex: `https://cdn.trilhainterativa.com.br`)

### Interceptors

O cliente axios possui interceptors configurados para:

**Request:**
- Adicionar headers padrão
- Preparado para adicionar tokens de autenticação (comentado)

**Response:**
- Extrair mensagens de erro do backend
- Transformar erros em formato consistente
- Tratar erros comuns (401, 403, 404, 500)
- Fornecer mensagens em português para erros de rede

## Exemplos de Uso em Componentes

### Padrão Recomendado

```typescript
import { api, getImageUrl } from '@/lib/api';
import { EntityProps } from '@/types/Entity';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';

export default function MyScreen() {
  const [entities, setEntities] = useState<EntityProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await api.entities.getAll();
        setEntities(data);
      } catch (error: any) {
        Alert.alert(
          'Erro',
          error?.message || 'Ocorreu um erro inesperado.'
        );
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#113D31" />
      </View>
    );
  }

  return (
    // Seu componente aqui
    // Use getImageUrl(entity.coverUrl) para imagens
  );
}
```

## Referências

- [BACKEND_ROUTES.md](../../BACKEND_ROUTES.md) - Documentação completa das rotas do backend
- [app/(tabs)/(home)/index.tsx](../../app/(tabs)/(home)/index.tsx) - Exemplo: buscar entidades
- [app/(tabs)/(home)/selectTrail.tsx](../../app/(tabs)/(home)/selectTrail.tsx) - Exemplo: buscar trilhas com filtro
