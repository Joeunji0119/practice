import ModalContainer from './ModalContainer';
import * as s from './style';

const Modal = () => {
	return (
		<ModalContainer>
			<div css={s.layout}>
				<div css={s.modalLayout}>
					<div css={s.question}> 창을 닫으시겠습니까 </div>
					<div css={s.buttonContainer}>
						<button css={s.button}> 네 </button>
						<button css={s.button}> 아니오 </button>
					</div>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Modal;
