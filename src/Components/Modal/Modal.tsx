/** @jsxImportSource @emotion/react */
import ModalContainer from "./ModalContainer";
import { css } from "@emotion/react";

const Modal = () => {
  return (
    <ModalContainer>
      <div css={layout}>aadsfadf</div>
    </ModalContainer>
  );
};

export default Modal;

const layout = css({
  width: "100vw",
  height: "100vh",
});
