// https://github.com/tcoopman/image-webpack-loader/issues/51
// need `brew install libpng` to run 'image-webpack-loader' on local machine
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

// wrapping this code in a arrow function is NOT a requirement
// for code splitting
export default () => {
    const image = document.createElement('img');
    image.src = small;

    document.body.appendChild(image);
}