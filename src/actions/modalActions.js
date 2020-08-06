export const OPEN_MODAL = "modal/OPEN_MODAL";
export const CLOSE_MODAL = "modal/CLOSE_MODAL";

export const openModal = () => ({ type: OPEN_MODAL, modal: "open" });
export const closeModal = () => ({ type: CLOSE_MODAL });
