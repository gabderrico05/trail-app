## Routes from backend and examples of 

### List Entities
GET https://api.trilhainterativa.com.br/entities

```json
response: {
  "message": "Entidades listadas com sucesso",
  "entities": [
    {
      "id": 1,
      "name": "Parquinho de teste",
      "email": "marcus@gmail.com",
      "zipCode": "11695304",
      "address": "Rua Praia Domingas Dias",
      "number": "206",
      "coverUrl": null,
      "city": "Ubatuba",
      "state": "SP",
      "phone": "5512992291446",
      "nameComplement": null,
      "addressComplement": null
    },
    {
      "id": 2,
      "name": "Parquinho de teste",
      "email": "marcus2@gmail.com",
      "zipCode": "11695304",
      "address": "Rua Praia Domingas Dias",
      "number": "207",
      "coverUrl": null,
      "city": "Ubatuba",
      "state": "SP",
      "phone": "5512992291447",
      "nameComplement": null,
      "addressComplement": null
    },
    ...,
    {
      "id": 10,
      "name": "João Silva",
      "email": "joao.silva@email.com",
      "zipCode": "12345678",
      "address": "Rua das Flores",
      "number": "123",
      "coverUrl": null,
      "city": "São Paulo",
      "state": "SP",
      "phone": "11999999999",
      "nameComplement": "Filho",
      "addressComplement": "Apto 45"
    }
  ]
}
```

### List Trails by entity ID
GET https://api.trilhainterativa.com.br/trails

```json
response: {
  "message": "Trilhas encontradas",
  "trails": [
    {
      "id": 1,
      "name": "Trilha da Pedra Grande",
      "description": "Esta trilha leva você através da mata atlântica até o topo da Pedra Grande, onde você terá uma vista de 360 graus da região. O caminho é bem marcado mas possui trechos íngremes. Ideal para quem busca um desafio moderado e quer apreciar a natureza.",
      "shortDescription": "Uma trilha desafiadora com vista panorâmica incrível da cidade.",
      "duration": 180,
      "distance": 5.5,
      "difficulty": "moderado",
      "safetyTips": "Teste",
      "coverUrl": null
    }
  ]
}
```

note: the cover url is the path after the base url from images bucket in .env and can be null if there is no image.