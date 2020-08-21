# tcc-poc-sga
Este repositório contém a implementação de uma POC para validar alguns requisitos não funcionais levantados na proposta arquitetural criada para o trabalho de conclusão do curso de especialização em Arquitetura de Software Distribuído da PUC-MG, cujo tema foi elaborar uma proposta arquitetural para uma plataforma que auxilie empresas do ramo de mineração no controle de seus processos minerários. O documento com a proposta completa você pode encontrar [neste documento](https://github.com/guilhermefontans/tcc-poc-sga/blob/master/TCC%20-%20Guilherme%20Nunes%20Fontans.pdf).

#### Pré requisitos para testar a POC
Os itens abaixo serão necessários para poder instalar o projeto
* Chave de api do [Sendgrid](https://sendgrid.com/) 
* Ter o [Docker](https://docs.docker.com/install/linux/docker-ce/debian/) na máquina que irá subir o projeto.
* Ter o [Docker Compose](https://docs.docker.com/compose/install/) na máquina que irá subir o projeto.  

#### Instalação
Tendo os pré-requisitos preenchidos e já estando dentro do diretório do projeto, para a instalação é necessário seguir os seguintes passos:

1. Entrar no diretório api-gateway, copiar o arquivo .env.example para .env e alterar o valor da variável SECRET
2. Entrar no diretório autenticação, copiar o arquivo .env.example para .env e alterar o valor da variável SECRET, deve ser o mesmo valor que está no api-gateway
3. Entrar no diretório modulo-seguranca-e-comunicacao, copiar o arquivo .env.example para .env e alterar a variável SENDGRID_API_KEY com sua chave de api obtida no Sendgrid.
4. No diretório raiz do projeto, rodar o comando abaixo para subir os containers necessários:
```sh
$ docker-compose up -d
```
5. Após efetuar esses passos, é necessário criar o usuário para autenticar, pois por trata-se de uma POC não foi implementado todas funcionalidades, entre elas, uma tela para criação de usuário. Para isso execute o seguinte comanto em seu terminal:
```sh
$ curl -X POST http://localhost:3335/users -d 'name=User' -d 'password=123456' -d 'username=user'
```
6. Após efetuar esses passos, acessar o seguinte endereço em seu navegador: http://localhost:3000