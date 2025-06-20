# S2Capivaras
API para gerenciamento de capivaras em um habitat. Você também pode testar a API no endereço [capivarinha.yorranan.com](https://capivarinha.yorranan.com).
## Instalando
Preferenciamente escolha instalar utilizando o Docker Compose
### Setup do projeto

```bash
npm install
```

### Execute usando Docker

Vá para o diretório do projeto e execute o comando:

```bash
docker compose up --build -d
```

Modifique o arquivo conforme a instrução, se for executar no Docker mantenha o trecho `db:3360`, se for apenas local utilze `localhost:3306`.

*Em caso de execução local:*

### Suba o banco de dados

```
npm run db:dev:up
```


### Compile e execute o projeto

```bash
npm run start
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
Ao começar você deve cadastrar primeiro o habitat, sem habitat não é possível realizar o cadastro de capivaras e notas.
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

Este projeto está sob a licença [MIT](https://github.com/yorranan/capivaras-api/blob/main/LICENSE)
