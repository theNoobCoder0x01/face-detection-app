import React, { useLayoutEffect, useState } from 'react';

import './FaceDetection.css';

const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
		setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

const FaceDetection = ({ imgURL, boxes, detectPressed }) => {
	const [width, height] = useWindowSize();

	const convertPercentagesToPixels = ({ top_row, bottom_row, left_col, right_col }) => {
		const imageElement = document.getElementById("image");
		const convertedRegion = {};
		const imgWidth = imageElement.width;
		const imgHeight = imageElement.height;
		convertedRegion.top = top_row * imgHeight + 38;
		convertedRegion.bottom = imgHeight - bottom_row * imgHeight;
		convertedRegion.left = left_col * imgWidth;
		convertedRegion.right = imgWidth - right_col * imgWidth;
		return convertedRegion;
	}

	return (
		<div className="absolute mt4">
			<img className="center ba bw2 b--white br3"
				width="95%"
				src={imgURL}
				alt="img"
				id="image" />

			{boxes.map((box, index) => (
				<div
					key={index}
					className="faceBox"
					style={{...convertPercentagesToPixels(box)}}>
				</div>)
			)}
		</div>
	);
}

export default FaceDetection;