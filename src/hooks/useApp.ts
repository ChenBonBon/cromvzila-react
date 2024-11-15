import useAppStore from "../stores/app";

export default function useApp() {
  const {
    bioVisible,
    easterEggVisible,
    maskVisible,
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
    bioVisible,
    easterEggVisible,
    maskVisible,
    showBio,
    hideBio,
    showEasterEgg,
    hideEasterEgg,
    showMask,
    hideMask,
  };
}
