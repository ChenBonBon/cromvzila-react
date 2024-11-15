import useFolioStore from "../stores/folio";

export default function useFolio() {
  const {
    folioList,
    rulesVisible,
    folio,
    folioVisible,
    setFolioList,
    setRulesVisible,
    setFolio,
    setFolioVisible,
  } = useFolioStore();

  function randomImages(count: number): string[] {
    const images = new Array(count).fill(0);
    const generated = new Set();

    for (let i = 0; i < count; i++) {
      const { prefix, ext, length } = getBucket();
      let num = Math.ceil(Math.random() * length);

      while (generated.has(`${prefix}${num}${ext}`)) {
        num = Math.ceil(Math.random() * length);
      }

      generated.add(`${prefix}${num}${ext}`);
      images[i] = `/images/${prefix}${num}${ext}`;
    }

    return images;
  }

  function getBucket() {
    const randomNumber = Math.ceil(Math.random() * 100);

    if (randomNumber < 95) {
      return { prefix: "animals/animal-", ext: ".png", length: 108 };
    } else {
      const randomNumber = Math.ceil(Math.random() * 100);
      if (randomNumber < 50) {
        return { prefix: "no-animals/no-animal-", ext: ".png", length: 24 };
      } else {
        return { prefix: "no-animal-gifs/no-animal-", ext: ".gif", length: 11 };
      }
    }
  }

  function refresh() {
    setFolioList(randomImages(8));
  }

  function showRules() {
    setRulesVisible(true);
  }

  function hideRules() {
    setRulesVisible(false);
  }

  function clearFolio() {
    setFolio(null);
  }

  function showFolio() {
    setFolioVisible(true);
  }

  function hideFolio() {
    setFolioVisible(false);
  }

  return {
    folioList,
    rulesVisible,
    folio,
    folioVisible,
    refresh,
    showRules,
    hideRules,
    setFolio,
    clearFolio,
    showFolio,
    hideFolio,
  };
}
