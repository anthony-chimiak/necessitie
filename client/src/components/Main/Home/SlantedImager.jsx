import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import laptopImg from "./../../../assets/images/laptop.png" 


export default function SlantedImager(props) {
  const {images, activeStep} = props;
  const theme = useTheme();
  let currArr = [];
  let relIndexPosArr = [];
  for(let i = 0; i < images.length; i++) {
    currArr.push(i);
  }
  relIndexPosArr.push(JSON.parse(JSON.stringify(currArr)));
  for(let i = 1; i < images.length; i++) {
    [currArr[i-1], currArr[i]] = [currArr[i], currArr[i-1]];
    relIndexPosArr.push(JSON.parse(JSON.stringify(currArr)));
  }
  return (
    <div className="slanted-imager-cont">
      <img loading="lazy" src={laptopImg} className="container-laptop examples-img index-0"/>
      {images.map((image, i) => {
        return <img key={image.label} loading="lazy" src={image.imgPath} className={`examples-img index-${relIndexPosArr[activeStep][i]}`}/>
      })}

    </div>
  );
}