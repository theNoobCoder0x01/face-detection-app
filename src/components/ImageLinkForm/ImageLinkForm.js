import './ImageLinkForm.css';

const ImageLinkForm = ({ inputChangeHandler, onButtonPress, link }) => {
	return (
		<div>
			<p className="text ma0 mb2">This magic brain will detect faces in your picture. Give it a try!!</p>
			<div className="form center br4 shadow-5">
				<input id="link-input" className="f4 br-5 w-70 center" type="text" onChange={inputChangeHandler} value={link} />
				<button
					className="button-grow w-30 f4 no-underline bn ph3 pv2 ml2 dib white bg-light-purple"
					onClick={onButtonPress} type="button">Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;