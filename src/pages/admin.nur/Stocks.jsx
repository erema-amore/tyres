import React, {useState} from 'react'
import classes from './AllClasses.css'


function Stocks() {
    const [image, setImage] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
      }
    };
  
    return (
      <div>
        <h2>Загрузите изображение акции</h2>
        
        {image && <img src={image} alt="Uploaded stock" width="300" />}
        
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
    );
  }
  
  

export default Stocks
