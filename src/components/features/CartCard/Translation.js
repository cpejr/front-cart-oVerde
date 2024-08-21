export function TranslateTextCart({ globalLanguage }) {
  let error;
  let loading;
  let unsupportedVideo;
  let unsupportedAudio;
  let unsupportedPDF;
  let clickHere;
  let noName;
  let noDescription;
  let currency;

  if (globalLanguage == "EN") {
    error = "error getting files";
    loading = "Loading images...";
    unsupportedVideo = "Your browser does not support the video element.";
    unsupportedAudio = "Your browser does not support the audio element.";
    unsupportedPDF = "Your browser does not support PDF viewing. You can";
    clickHere = "download it here";
    noName = "No name";
    noDescription = "No Description";
    currency = "US$";
  } else if (globalLanguage == "PT") {
    error = "erro ao pegar os arquivos";
    loading = "Carregando imagens...";
    unsupportedVideo = "Seu navegador não suporta o elemento de vídeo.";
    unsupportedAudio = "Seu navegador não suporta o elemento de áudio.";
    unsupportedPDF = "Seu navegador não suporta visualização de PDF. Você pode";
    clickHere = "baixá-lo aqui";
    noName = "Sem nome";
    noDescription = "Sem descrição";
    currency = "R$";
  } else if (globalLanguage == "ES") {
    error = "error al recuperar archivos";
    loading = "cargando imágenes...";
    unsupportedVideo = "Su navegador no soporta el elemento de vídeo.";
    unsupportedAudio = "Su navegador no soporta el elemento de audio.";
    unsupportedPDF = "Su navegador no admite la visualización de PDF. Puede";
    clickHere = "descárgalo aquí";
    noName = "sin nombre";
    noDescription = "sin descripción";
    currency = "€";
  }

  return {
    error,
    loading,
    unsupportedVideo,
    unsupportedAudio,
    unsupportedPDF,
    clickHere,
    noName,
    noDescription,
    currency,
  };
}
