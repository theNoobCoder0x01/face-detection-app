import React from 'react';

const FaceDetection = ({ imgURL }) => {
    return (
        <div className="mt4">
            <img className="center ba bw2 b--white br3"
                style={{width: "98%"}}
                src={imgURL}
                alt="img" />
        </div>
    );
}

export default FaceDetection;