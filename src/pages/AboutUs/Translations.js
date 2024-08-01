export function TranslateTextHeader({ globalLanguage }) {
    let text;
    let title;
  
    if (globalLanguage === 'EN') {
        title = 'ABOUT THE COMPANY';
        text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat.
        Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim.
        Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla,
        maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus
        ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet
        leo dignissim laoreet et porta elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur et libero ligula. Aliquam
        pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu
        turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra
        tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper
        tincidunt non, consectetur non tellus. Phasellus ullamcorper
        pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim
        laoreet et porta elit. EN`;

    } else if (globalLanguage === 'PT') {
        title = 'SOBRE A EMPRESA';
        text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
        libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat.
        Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim.
        Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla,
        maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus
        ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet
        leo dignissim laoreet et porta elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur et libero ligula. Aliquam
        pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu
        turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra
        tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper
        tincidunt non, consectetur non tellus. Phasellus ullamcorper
        pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim
        laoreet et porta elit. PT`;

    } else if (globalLanguage === 'ES') {
      title = 'SOBRE LA EMPRESA';
      text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
      libero ligula. Aliquam pharetra suscipit euismod. Aliquam erat volutpat.
      Duis dapibus nulla eu turpis aliquam ultricies. Duis sed consequat enim.
      Pellentesque viverra tristique nisi ut suscipit. Proin augue nulla,
      maximus ullamcorper tincidunt non, consectetur non tellus. Phasellus
      ullamcorper pellentesque lectus vel egestas. Vestibulum eu ex sit amet
      leo dignissim laoreet et porta elit. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Curabitur et libero ligula. Aliquam
      pharetra suscipit euismod. Aliquam erat volutpat. Duis dapibus nulla eu
      turpis aliquam ultricies. Duis sed consequat enim. Pellentesque viverra
      tristique nisi ut suscipit. Proin augue nulla, maximus ullamcorper
      tincidunt non, consectetur non tellus. Phasellus ullamcorper
      pellentesque lectus vel egestas. Vestibulum eu ex sit amet leo dignissim
      laoreet et porta elit. ES`;
  }

    return {
      text,
      title,
    };
  }