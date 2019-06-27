import React from 'react';

const SingleImage = (props) => {

  return(
    <li>
      <img
        src={props.src}
        alt=""
      />
    </li>
  );

}

export default SingleImage;
