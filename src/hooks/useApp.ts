import useAppStore from "../stores/app";

export default function useApp() {
  const {
    width,
    height,
    bioVisible,
    easterEggVisible,
    maskVisible,
    setWidth,
    setHeight,
    setBioVisible,
    setEasterEggVisible,
    setMaskVisible,
  } = useAppStore();

  function showBio() {
    setBioVisible(true);
  }

  function hideBio() {
    setBioVisible(false);
  }

  function showEasterEgg() {
    setEasterEggVisible(true);
  }

  function hideEasterEgg() {
    setEasterEggVisible(false);
  }

  function showMask() {
    setMaskVisible(true);
  }

  function hideMask() {
    setMaskVisible(false);
  }

  return {
    width,
    height,
    bioVisible,
    easterEggVisible,
    maskVisible,
    setWidth,
    setHeight,
    showBio,
    hideBio,
    showEasterEgg,
    hideEasterEgg,
    showMask,
    hideMask,
  };
}
