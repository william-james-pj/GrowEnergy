<br />
<p align="center">

  <h3 align="center">Grow Energy</h3>

  <p align="center">
    Integração e Exibição das Informações em Painéis Solares de Diferentes Condomínios
  </p>
</p>

<details open="open">
  <summary>Índice</summary>
    <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#protótipo-de-baixa-fidelidade">Protótipo de baixa fidelidade</a></li>
        <li><a href="#construído-com">Construido com</a></li>
        <li><a href="#funcionalidades">Funcionalidades</a></li>
      </ul>
    </li>
    <li><a href="#grupo">Grupo</a></li>
  </ol>
</details>

## Sobre o projeto

App construído para auxiliar o gerenciamento de geração de energia solar, permitindo unir todas as suas estações de energia solar em um só lugar, dessa forma, facilitando o gerenciamento e proporcionando um controle dos dados através de um dashboard.

### Protótipo de baixa fidelidade

A imagem abaixo, representa nosso protótipo de baixa fidelidade.

![screenshot](.github/baixaFidelidade.png)

### Protótipo de alta fidelidade

O nosso protótipo de alta fidelidade foi construído no [Figma](http://figma.com/).

- [Protótipo de alta fidelidade](https://www.figma.com/file/nDTYd4xtBrNfxowenXd45r/UPX6?node-id=0%3A1)

### Construído com

O projeto foi construído utilizando:

- [Expo](https://expo.dev/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org)

### Funcionalidades

A primeira funcionalidade é as informações de economia de energia, onde é possível ver o total economizado com a geração de energia a cada mês.

<p align="center">
  <img src=".github/economiaDeEnergia.jpeg" alt="economia de energia" width="215"/>
</p>

A segunda funcionalidade é o Dashboard onde apresenta um gráfico com as informações de geração solar durante o mês selecionado e um gráfico com a comparação das gerações dos últimos meses. No Dashboard tem a opção do usuário selecionar um determinado condomínio ou uma determinada data.

<p align="center">
  <img src=".github/dashboard.jpeg" alt="dashboard" width="215"/>
</p>

A terceira funcionalidade é a opção de analisar cada condomínio separado e suas estações de geração solar, onde o usuário pode selecionar uma estação específica e ver sua geração dos últimos dias e dos últimos meses.

<p align="center">
  <img src=".github/condominio1.jpeg" alt="condominio1" width="200"/>
  <img src=".github/condominio2.jpeg" alt="condominio2" width="215"/>
  <img src=".github/condominio3.jpeg" alt="condominio3" width="200"/>
</p>

A última funcionalidade está disponível apenas para os usuários admins onde possuem acesso a um CRUD de usuários, podendo adicionar novos ou editar os existentes. Na criação de um usuário pode ser criado como “admin”, e possuir acesso aos dados de todos os condomínios, ou pode ser criado como “síndico”, e possuir acesso apenas aos condôminos que lhe foram concebidos o acesso.

<p align="center">
  <img src=".github/crud1.jpeg" alt="crud1" width="215"/>
  <img src=".github/crud2.jpeg" alt="crud2" width="215"/>
</p>

## Grupo

- Beatriz Tiemi Hashimoto - RA: 200238
- Guilherme Alarcon de Campos - RA: 200228
- Gustavo Tomoyuki Nozue - RA: 200211
- Henrique de Resende Arantes - RA: 200206
- Thiago Fernando Rodrigues - RA: 200126
- Thiago José Rodrigues Pires - RA: 200569
- William James P. Júnior - RA: 200887

Link do projeto: [https://github.com/william-james-pj/growEnergy](https://github.com/william-james-pj/growEnergy)
