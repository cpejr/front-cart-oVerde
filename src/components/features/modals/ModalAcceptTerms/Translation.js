export function TranslateTextModal({ globalLanguage }) {
  let Title;
  let paragraph1;
  let paragraph2;
  let paragraph3;
  let paragraph4;
  let select;

  if (globalLanguage == "EN") {
    Title = "Terms of Acceptance and Privacy";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "I agree to the terms described above";
  } else if (globalLanguage == "PT") {
    Title = "Termo de Aceite e privacidade";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "Eu concordo com os termos descritos acima";
  } else if (globalLanguage == "ES") {
    Title = "Términos de Aceptación y privacidad";
    paragraph1 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph2 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph3 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    paragraph4 =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim laoreet et porta elit.";
    select = "Acepto los términos descritos anteriormente";
  }

  return {
    Title,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    select,
  };
}
