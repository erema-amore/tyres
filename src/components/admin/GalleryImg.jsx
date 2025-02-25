import React from 'react'
import './GalleryImg.css'

const GalleryImg = () => {
  return (
    <div>
      <div className="img">
            <div>  <label>Фото шины</label> </div>
            <div>  <label htmlFor="upload" className="upload-btn">+ добавить картинку</label>
            <input type="file" id="upload" hidden /> </div>
            </div>
            <div className="gallery">
                <div><label>Галерея</label> </div>
                <div> <label htmlFor="upload" className="upload-btn">+ добавить картинку</label>
                <input type="file" id="upload" hidden /> </div>
            </div>
    </div>
  )
}

export default GalleryImg
