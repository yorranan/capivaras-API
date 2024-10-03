# S2Capivaras
API para gerenciamento de capivaras em um habitat. Você também pode testar a API no endereço [capivarinha.yorranan.com](https://capivarinha.yorranan.com).
## Instalando
Preferenciamente escolha instalar utilizando o Docker Compose
### Setup do projeto

```bash
npm install
```

### Compile e execute o projeto

```bash
npm run start
```

### Execute usando Docker

Vá para o diretório do projeto e execute o comando:

```bash
docker compose up --build -d
```

### Pare a execução dos contêineres 

```bash
docker compose down
```

> Verifique se nenhum dos contêires caiu durante o processo, se necessário reinicie.

Se tudo ocorrer bem acesse: http://localhost:3000

### Execução de teste da página hello

```bash
npm run test
```
## Passando informações através da API

Para cada um dos principais paths (capybara, note, habitat) existe um JSON especifico.

### Tipos de dados

Capivara:
> O *Status de Saúde* pode ser: `HEALTHY`(Saudável), `NEED_CARE` (Precisa de cuidados), e `DIED` (Morta).

```
{
	"name": String,
	"weight": Float,
	"health": Status de Saúde,
	"age": Integer,
	"habitatId": Integer
}
```
Nota:
```
{
	"capybaraId" : Integer,
	"observations": String, (Opcional)
	"comportament": String  (Opcional)
}
```
Habitat:
```
{
	"name":String,
	"is_enable": Boolean
}
```

### Exemplos de requisições

```json
{
	"name":"Nome da capivara",
	"weight": 12.34,
	"health": "HEALTHY",
	"age": 3,
	"habitatId": 1
}
```
Nota:
```json
{
	"capybaraId" : 1,
	"observations": "primeira nota",
	"comportament": "capivara dançando"
}
```
Habitat:
```json
{
	"name":"Lago",
	"is_enable": true
}
```

## License

[MIT](https://github.com/yorranan/capivaras-api/blob/main/LICENSE)
