import React from 'react'
import image12 from "../assets/images/silder_img.png"
import arrowimg from "../assets/images/arrow_img.png"
export default function CardBrandSection({img,description,tags}) {

  return (
    <div className="main__details card-brand mb-3 ">
    <div className="img_section">
      <img src={img} className="img__left"/>
    </div>
    <div className="all__section">
      <div className="main__part">
        {
          tags.split(',').map(item=>{
          if(item.length===0){
            return
          }
          return <div key={item} className="desinger__name">
            <span>{item}</span>
          </div>})
        }
       
      </div>
    </div>
    <div className="text__details flex ">
      <p className="w-[90%]">{description.trim()}</p>
      <div className="text__img">
        <img src={arrowimg} className="arrow_img "/>
      </div>
    </div>
    </div>
  )
}
