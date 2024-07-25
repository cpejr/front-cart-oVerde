export function TranslateTextHeader({ globalLanguage }) {
    let textAudio;
    let textVideo;
    let textPDF;
    let textDownload;
  
    if (globalLanguage === 'EN') {
        textVideo = 'Your browser does not support the video element.';
        textAudio = 'Your browser does not support the audio element.';
        textPDF = 'Your browser does not support PDF viewing. You can " "';
        textDownload = "Download it here";

    } else if (globalLanguage === 'PT') {
        textVideo = 'Seu navegador não suporta o elemento de vídeo.';
        textAudio = 'Seu navegador não suporta o elemento de áudio.';
        textPDF = 'Seu navegador não suporta visualização de PDF. Você pode " "';
        textDownload = "Baixá-lo aqui";
    }

    return {
      textVideo,
      textAudio,
      textDownload,
      textPDF,
    };
  }