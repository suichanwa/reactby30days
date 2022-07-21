import React, { Fragment, useEffect, useState } from 'react';
import Image from './Components/Imagess';
import './App.css';


const App = () => {
   interface IImage {
    id: number,
    title: string,
    url: string
  }


  const [images, setImages] = useState<IImage[]>([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?breed_id=abys')
      .then(res => res.json())
      .then(json => setImages(json))
      .catch(err => console.log(err));
  }
  , []);
  return (
    <Fragment>
      <div className="App">
        <h1>Image Gallery</h1>
        <div className="image-container">
          {images.map(image => (
            <Image key={image.id} image={image.url} alt={image.title} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}


export default App;
