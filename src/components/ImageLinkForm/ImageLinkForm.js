import React, { useState } from 'react';
import FaceDetection from './FaceDetection';

import './ImageLinkForm.css';

const ImageLinkForm = ({ children }) => {
	const [link, setLink] = useState("");
	const [shouldShowImage, setShouldShowImage] = useState(false);

	const linkInputChangeHandler = event => {
		const text = event.target.value;
		setLink(text);
		setShouldShowImage(false);
	}

	const convertPercentagesToPixels = (region, imageElement) => {
		const convertedRegion = region;
		const imgWidth = imageElement.width;
		const imgHeight = imageElement.height;
		console.log("width: ", imgWidth);
		console.log("height: ", imgHeight);
		convertedRegion.top_row = region.top_row * imgHeight;
		convertedRegion.bottom_row = region.bottom_row * imgHeight;
		convertedRegion.left_col = region.left_col * imgWidth;
		convertedRegion.right_col = region.right_col * imgWidth;
		return convertedRegion;
	}

	const calculateBoxes = result => {
		const imageElement = document.getElementById("image");
		const regions = JSON.parse(result).outputs[0].data.regions;
		const boxes = regions.map(
			region => convertPercentagesToPixels(
				region.region_info.bounding_box, imageElement
			)
		)
		console.log(boxes);
		const canvas = document.getElementById("imageDiv");
		
	}

	const onButtonPress = event => {
		console.log("Click");

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Key 59a739a807b0417990b5bb0987b3ac04");
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			"inputs": [ { "data": {
				"image": { "url": link, } }
			} ]
		});

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("https://api.clarifai.com/v2/models/a403429f2ddf4b49b307e318f00e528b/outputs", requestOptions)
			.then(response => response.text())
			.then(result => calculateBoxes(result))
			.catch(error => console.log('error', error));

		setShouldShowImage(true);
	}

	return (
		<div>
			<p className="text ma0 mb2">
				This magic brain will detect faces in your picture. Give it a try!!
			</p>
			<div className="form center-mauto br4 shadow-5">
				<div className="center">
					<input id="link-input"
						className="f4 br-5 w-70 center"
						onChange={linkInputChangeHandler}
						type="text"
						value={link}
					/>
					<button type="button"
						className="button-grow w-30 f4 no-underline bn ph3 pv2 ml2 dib white bg-light-purple"
						onClick={onButtonPress}
					>
							Detect
					</button>
				</div>
				{shouldShowImage ? (<FaceDetection imgURL={link} />) : (<></>) }
			</div>
		</div>
	);
}

export default ImageLinkForm;