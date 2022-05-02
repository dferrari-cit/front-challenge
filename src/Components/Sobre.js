import React from "react";

const Sobre = () => {
  React.useEffect(() => {
    document.title = "Time dos legais - Front | Sobre";
  }, []);

  return (
    <>
      <h1>Sobre o Projeto</h1>
      <p className="text">
        O Projeto é uma pequena aplicação (backend em Node Typescript) que realiza
        consulta a um endpoint externo do Github, afim de trazer algumas
        informações básicas de um usuário: Informações do perfil do usuário:
        Avatar; Nome; Biografia; Endereço do perfil do usuário; Os 5
        reposoistórios mais favoritados (stars) com as seguintes informações:
        Nome; Descrição; Indicativo (flag) de privado; Endereço do perfil do
        repositório;
      </p>
    </>
  );
};

export default Sobre;
