/** @jsxImportSource @emotion/react */
import ModalContainer from "./ModalContainer";
import { css } from "@emotion/react";

const Modal = () => {
  return (
    <ModalContainer>
      <div css={layout}>
        <div css={modalLayout}>
          <div css={question}> 창을 닫으시겠습니까 </div>
          <div css={buttonContainer}>
            <button css={button}> 네 </button>
            <button css={button}> 아니오 </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;

const layout = css({
  width: "100vw",
  minWidth: "600px",
  height: "100vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const modalLayout = css({
  width: "30%",
  height: "30%",
  background: "pink",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",

  padding: "2%",
});

const question = css({
  fontSize: "20px",
  fontWeight: 600,
});

const buttonContainer = css({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
});

const button = css({});
