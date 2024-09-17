export function TranslateTextHeader({ globalLanguage }) {
  let text;
  let title;

  if (globalLanguage === "EN") {
    title = "Objective of the Initiative";
    text = `To promote the preservation and restoration of forests through a digital platform for tree adoption, contributing to the fight against climate change and promoting environmental sustainability. To create and maintain true oxygen factories, contributing to the health of the ecosystem.`;
  } else if (globalLanguage === "PT") {
    title = "Objetivo da Iniciativa";
    text = `Promover a preservação e a recuperação de florestas por meio de uma plataforma digital de adoção de árvores, contribuindo para combater as mudanças climáticas e promover a sustentabilidade ambiental. Criar e manter verdadeiras usinas de oxigênio contribuindo com a saúde do ecossistema.`;
  } else if (globalLanguage === "ES") {
    title = "Objetivo de la Iniciativa";
    text = `Promover la preservación y recuperación de bosques a través de una plataforma digital de adopción de árboles, contribuyendo a combatir el cambio climático y promover la sostenibilidad ambiental. Crear y mantener verdaderas fábricas de oxígeno, contribuyendo a la salud del ecosistema.`;
  }

  return {
    text,
    title,
  };
}
