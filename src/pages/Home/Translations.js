export function TranslateTextHeader({ globalLanguage }) {
    let missionTitle;
    let missionText;
    let buttonText;
    let visionTitle;
    let visionText;
    let productsTitle;
    let productsText;
  
    if (globalLanguage === 'EN') {
        missionTitle = 'Mission';
        missionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
                        volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        buttonText = 'Know More';
        visionTitle = 'Vision and values';
        visionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        productsTitle = 'Our products';
        productsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;

    } else if (globalLanguage === 'PT') {
        missionTitle = 'Missão';
        missionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
                        volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        buttonText = 'Saiba Mais';
        visionTitle = 'Visão e valores';
        visionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        productsTitle = 'Nossos produtos';
        productsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;

    } else if (globalLanguage === 'ES') {
        missionTitle = 'Misión';
        missionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
                        volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        buttonText = 'Sepa mas';
        visionTitle = 'Visión y valores';
        visionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
        productsTitle = 'Nuestros productos';
        productsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat
            volutpat. Duis dapibus nulla eu turpis aliquam ultricies.`;
    }

    return {
      missionTitle,
      missionText,
      visionTitle,
      visionText,
      productsTitle,
      productsText,
      buttonText,
    };
  }