# Athena Hideout - A Rede Social para Mulheres Gamers


### Índice

* [1 - Prefácio](#1-prefácio)
* [2 - Produto](#2-produto)
 * [2.1 - Interfaces e Layouts](#2.1-interfaces-e-layouts)
 * [2.2 - Funcionalidades](#2.2-funcionalidades)
* [3 - Considerações Técnicas](#3-considerações-técnicas)
 * [3.1 - Ferramentas](#3.1-ferramentas)
 * [3.2 - Diagrama da Aplicação](#3.2-diagrama-da-aplicação)
* [4 - Autoras](#4-autoras)


## 1. Prefácio

Este projeto foi desenvolvido com o intuito de criar uma rede social com enfoque no 
universo gamer destinada às mulheres *cis* e *trans*, onde todas possam expressar seus gostos, 
preferências e opiniões sobre este universo.

A ideia surgiu da observação de ambientes de *streaming* de jogos e jogos online em si, 
os quais em sua maioria, são permeados por atitudes relacionadas à toxicidade, machismo e 
assédio gerados pelos integrantes do sexo masculino para com as integrantes que se identificam 
como mulheres, gerando ambientes de exclusão e negatividade nas plataformas de *streaming* e 
em modos de jogo online.


## 2. Produto

Iniciado em trio e finalizado em dupla, no terceiro projeto pela Laboratoria, a *criação de 
uma rede social* tinha a possibilidade de escolha do tema do projeto, onde foram dadas algumas 
opções para a turma como Viagens, Feminismo e Animais, mas também era possível trabalhar com um 
tema livre, que no caso foi a nossa escolha devido à afinidade das três integrantes com tema Videogames.

O objetivo do nosso projeto é desenvolver uma rede social destinada a mulheres *cis* e *trans*, 
lugar o qual elas possam se sentir seguras para expressar a si mesmas em relação as suas atividades, 
rotinas e preferências, e também conectar essas pessoas umas as outras através de suas interações 
na rede social, podendo também formar uma rede de apoio de mulheres gamers dentro desse universo 
gigantesco que é o mundo dos games!

### 2.1. Interfaces e Layouts

Para o desenvolvimento deste projeto, interfaces e layouts foram definidos de previamente pela 
Laboratoria e estipulados como modelos a serem replicados dentro dos diferentes temas escolhidos. 
Deste modo, podíamos escolher o tema, a paleta de cores e estilos de botões e outros elementos, 
mas aplicando as normas pré-estabelecidas pela Laboratoria, sendo elas:

  * Interfaces:
    - Tela de *Login*;

    - Tela de Cadastro;

    - Tela *Feed*;
    - Tela de Perfil;

  *	Layouts:

  [- Mobile: Login e Feed:](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

  [- Desktop: Login e Feed:](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)

  **Telas Finais:**

  [- Tela Login Desktop:]()

  [- Tela Cadastro Desktop:]()

  [- Tela Perfil Desktop:]()

  [- Tela Feed Desktop:]()

  [- Tela Login Mobile:]()

  [- Tela Feed Mobile:]()

### 2.2. Funcionalidades

Este projeto possui algumas funcionalidades comuns à maioria das redes sociais, sendo elas:

  *	Cadastro na Rede Social;
  *	Login por E-mail e Senha previamente cadastrados;
  *	Login pela conta do Google;
  *	Informações e edição de Perfil;
  *	Postagem com identificação do usuário que postou;
  *	Data e hora de postagem;
  *	Visualização de posts criados por outros usuários;
  *	Anexo de imagens locais no post a ser criado;
  *	Deletar posts criados;


## 3. Considerações Técnicas

Foi definida uma padronização do projeto pela Laboratória, onde teriam que ser utilizados 
conceitos e ferramentas pré-determinadas, para que o mesmo atingisse uma aceitação mínima 
de elementos e normas a ele aplicados, sendo eles:

  *	A aplicação deve ser uma *Single Page Application (SPA)*, onde a navegação dentro da aplicação 
    seria feita a partir do conceito de rotas;
  *	O *back-end* da aplicação deveria ser criado a partir de produtos exclusivos do *Firebase*, 
    como *Cloud Firestore, Cloud Storage, Firebase Hosting e Firebase Authentication*;
  *	O posicionamento de objetos assim como a responsividade da aplicação, deveria ser criada a 
    partir de conceitos do *CSS Flexbox* e *Media Queries*;

### 3.1. Ferramentas

#### Firebase

Para gerenciar contas, usuários e dados existentes na aplicação, foram utilizados produtos provenientes 
do *Firebase - Google*, o qual é uma plataforma de desenvolvimento *mobile e web noSQL*, onde é possível 
utilizar ferramentas *back-end* sem a necessidade de construir um ambiente de back-end do zero, proporcionando 
uma fácil usabilidade e aplicação em projetos *front-end*.

Os produtos provenientes do Firebase utilizados nesse projeto são:

 * Cloud Firestore: sendo o database do projeto, onde estão armazenadas informações como usuários, posts e *timestamp*;
 * Firebase Authentication: é a parte responsável por autenticar, criar e deletar usuários na aplicação;
 * Firebase Hosting: este por sua vez, vai hospedar a aplicação, disponibilizando a mesma online;
 * Cloud Storage: e por fim, o Storage, local onde serão armazenados dados como imagens, vídeos e aúdios;


#### GitHub, GitKraken e GitFlow

Para versionamento das etapas e contribuições no projeto, foram utilizados o *GitHub*, o *GitKraken* e o método 
*GitFlow*. Estes dois últimos foram utilizados no projeto como uma maneira de ter mais controle e facilidade na 
visualização da árvore de versionamento criada ao longo do projeto por todas as integrantes, as quais trabalhavam 
individualmente em *branches* e posteriormente, atualizavam o código na *master*.

#### Trello

Para o planejamento e administração do projeto foi utilizado o *Trello*, onde foram dividas as tarefas a serem feitas 
pelas Histórias de Usuário em *Sprints*, segundo a *Metodologia Agile*, para cada integrante do projeto. Sendo realizadas 
reuniões e conversas de planejamento para adequações e decisões relacionadas ao mesmo.

### 3.2. Diagrama da Aplicação

Para direcionamento do projeto em relação ao desenvolvimento e as dependências de cada interface, foi criado um diagrama 
da aplicação no site *Drawio*, o mesmo se encontra abaixo.

[- Diagrama da Aplicação]()


## 4. Autoras

Este projeto foi desenvolvido por:

* Ana Carolina dos Reis Ramos
  - e-mail: ana.carolina.dos.reis.ramos@gmail.com

* Luana Andrade
  - e-mail: luana.las21@gmail.com

*	Jucielly da Silva
  - e-mail: juciellysouzasilva@gmail.com

