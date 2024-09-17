export function TranslateTextHeader({ globalLanguage }) {
  let textAudio;
  let textVideo;
  let textPDF;
  let textDownload;
  let error;
  let toastInvalidNumber;
  if (globalLanguage === "EN") {
    textVideo = "Your browser does not support the video element.";
    textAudio = "Your browser does not support the audio element.";
    textPDF = 'Your browser does not support PDF viewing. You can " "';
    textDownload = "Download it here";
    error = "error getting files";
    toastInvalidNumber = "insert a valid number";
  } else if (globalLanguage === "PT") {
    textVideo = "Seu navegador não suporta o elemento de vídeo.";
    textAudio = "Seu navegador não suporta o elemento de áudio.";
    textPDF = 'Seu navegador não suporta visualização de PDF. Você pode " "';
    textDownload = "Baixá-lo aqui";
    error = "erro ao pegar os arquivos";
    toastInvalidNumber = "insira um numero valido ";
  } else if (globalLanguage === "ES") {
    textVideo = "Su navegador no soporta el elemento de vídeo.";
    textAudio = "Su navegador no soporta el elemento de audio.";
    textPDF = 'Su navegador no admite la visualización de PDF. Tu puedes " "';
    textDownload = "Descarguelo aqui";
    error = "error al recuperar archivos";
    toastInvalidNumber = "introduce un número válido";
  }

  return {
    textVideo,
    textAudio,
    textDownload,
    textPDF,
    error,
    toastInvalidNumber,
  };
}
