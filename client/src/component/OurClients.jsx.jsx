import React from 'react'
import OurServices from './OurSection'
import OurSection from './OurSection'
import clientphoto from '../assets/images/cilent_photo.png'
import starimage from '../assets/images/star_image.png'
import ReviewCard from './review/ReviewCard'
import ReviewSlider from './review/ReviewSlider'

export default function OurClients() {
  return (
    <div>
    <OurSection/>
   <ReviewSlider/>
    </div>

  )
}