export default async function translateText(text, language) {
    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${language}&dt=t&q=${encodeURIComponent(
          text
        )}`
      );

    } catch (error) {
      
    }
  }