import { createPortal } from "react-dom";

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, document.getElementById("modal"));
};

export default ModalContainer;
