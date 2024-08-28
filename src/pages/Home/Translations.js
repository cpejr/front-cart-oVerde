export function TranslateTextHeader({ globalLanguage }) {
  let missionTitle;
  let missionText;
  let buttonText;
  let visionTitle;
  let visionText;
  let valuesTitle;
  let valuesText;

  if (globalLanguage === "EN") {
    missionTitle = "Mission";
    missionText = `Our mission is to encourage individuals and companies to engage in environmental protection by offering an accessible and transparent way to contribute to forest preservation through tree adoption. We strive to create a lasting positive impact by promoting awareness and taking concrete actions to address the challenges of climate change.`;
    buttonText = "Know More";
    visionTitle = "Vision";
    visionText = `Our vision is to create a world where forest preservation is a global priority and where everyone recognizes their role in protecting the environment. We aim to be a leading platform in tree adoption, connecting communities worldwide towards a common goal: a greener and more sustainable planet for future generations.`;
    valuesTitle = "Values";
    valuesText = `1 - Sustainability: We are committed to acting in an environmentally responsible manner, promoting sustainable practices in all our operations.<br /><br />
2 - Transparency: We value transparency in all our actions, from resource acquisition to monitoring and reporting the progress of our projects.<br /><br />
3 - Collaboration: We believe in the power of collaboration and the importance of working in partnership with local communities, NGOs, companies, and governments to achieve our common goals. By joining forces, we can make a significant impact on the planet's preservation.<br /><br />
4 - Innovation: We are committed to continuously seeking innovative and effective solutions to environmental challenges, adapting to emerging needs and opportunities.`;
  } else if (globalLanguage === "PT") {
    missionTitle = "Missão";
    missionText = `Nossa missão é incentivar indivíduos e empresas a se engajarem na proteção do meio ambiente, oferecendo uma maneira acessível e transparente de contribuir para a preservação de florestas através da adoção de árvores. Buscamos criar um impacto positivo duradouro, promovendo a conscientização e ações concretas para enfrentar os desafios das mudanças climáticas.`;
    buttonText = "Saiba Mais";
    visionTitle = "Visão ";
    visionText = `Nossa missão é incentivar indivíduos e empresas a se engajarem na proteção do meio ambiente, oferecendo uma maneira acessível e transparente de contribuir para a preservação de florestas através da adoção de árvores. Buscamos criar um impacto positivo duradouro, promovendo a conscientização e ações concretas para enfrentar os desafios das mudanças climáticas.`;
    valuesTitle = "Valores";
    valuesText = `1 - Sustentabilidade: Comprometemo-nos a agir de forma ambientalmente responsável, promovendo práticas sustentáveis em todas as nossas operações.<br /><br />

2 - Transparência: Valorizamos a transparência em todas as nossas ações, desde a captação de recursos até o monitoramento e relato do progresso de nossos projetos.<br /><br />

3 - Colaboração: Acreditamos no poder da colaboração e na importância de trabalhar em parceria com comunidades locais, ONGs, empresas e governos para alcançar nossos objetivos comuns. Unindo forças teremos condição de fazer algo significativo para a preservação do planeta.<br /><br />

4 - Inovação: Estamos comprometidos em buscar continuamente soluções inovadoras e eficazes para os desafios ambientais, adaptando-nos às necessidades e oportunidades emergentes.
`;
  } else if (globalLanguage === "ES") {
    missionTitle = "Misión";
    missionText = `Nuestra misión es incentivar a individuos y empresas a comprometerse con la protección del medio ambiente, ofreciendo una forma accesible y transparente de contribuir a la preservación de los bosques a través de la adopción de árboles. Buscamos crear un impacto positivo duradero, promoviendo la conciencia y acciones concretas para enfrentar los desafíos del cambio climático.`;
    buttonText = "Sepa mas";
    visionTitle = "Visión";
    visionText = `Nuestra visión es crear un mundo donde la preservación de los bosques sea una prioridad global y donde cada persona reconozca su papel en la protección del medio ambiente. Aspiramos a ser una plataforma líder en la adopción de árboles, conectando comunidades en todo el mundo en pro de un objetivo común: un planeta más verde y sostenible para las futuras generaciones.`;
    valuesTitle = "Valores";
    valuesText = `1 - Sostenibilidad: Estamos comprometidos a actuar de manera ambientalmente responsable, promoviendo prácticas sostenibles en todas nuestras operaciones.<br /><br />
2 - Transparencia: Valoramos la transparencia en todas nuestras acciones, desde la captación de recursos hasta el monitoreo y reporte del progreso de nuestros proyectos.<br /><br />
3 - Colaboración: Creemos en el poder de la colaboración y en la importancia de trabajar en asociación con comunidades locales, ONG, empresas y gobiernos para alcanzar nuestros objetivos comunes. Uniendo fuerzas, podremos hacer algo significativo para la preservación del planeta.<br /><br />
4 - Innovación: Estamos comprometidos a buscar continuamente soluciones innovadoras y eficaces para los desafíos ambientales, adaptándonos a las necesidades y oportunidades emergentes.





`;
  }

  return {
    missionTitle,
    missionText,
    visionTitle,
    visionText,
    valuesTitle,
    valuesText,
    buttonText,
  };
}
