import React from 'react';
import Canvas from './Canvas';

const FaceDetection = ({ imgURL, boxes }) => {
	const onButtonPress = () => {
		const context = document.getElementById("boxCanvas").getContext("2d");
		const box = boxes[0];
		context.rect(box.top_row, box.left_col, (box.right_col - box.left_col), (box.bottom_row - box.top_row));
		context.stroke();
	}
	return (
		<div id="imageDiv" className="mt4">
			<button type="button" onClick={onButtonPress}>Show</button>
			<img className="center ba bw2 b--white br3"
				style={{width: "98%"}}
				src={imgURL}
				alt="img"
				id="image" />
			<Canvas />
		</div>
	);
}

export default FaceDetection;