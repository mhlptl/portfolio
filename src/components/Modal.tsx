import React from "react";
import "../css/modal.css";

interface ModalProps {
	src: string;
	closeModal: () => void;
}

const Modal = (props: ModalProps): JSX.Element => {
	const {src, closeModal} = props;

	const handleClick = (e: React.MouseEvent) => {
		if (e.target !== e.currentTarget) return;
		closeModal();
	};

	return (
		<div onClick={handleClick} className={"modal-container"}>
			<div className={"modal"}>
				<div className={"modal-header"}></div>
				<div className={"modal-body"}>
					<picture className={"modal-body"}>
						<source srcSet={`${src}.webp`} type={"image/webp"} />
						<source srcSet={`${src}.png`} type={"image/png"} />
						<img src={`${src}.png`} alt={"project screenshot enlarged"} />
					</picture>
				</div>
				<div className={"modal-footer"}>
					<button onClick={closeModal} className={"btn btn-md btn-outline"}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
