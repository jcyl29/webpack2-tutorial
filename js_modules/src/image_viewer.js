// https://github.com/tcoopman/image-webpack-loader/issues/51
// need `brew install libpng` to run 'image-webpack-loader' on local machine
import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

const image = document.createElement('img');
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);
