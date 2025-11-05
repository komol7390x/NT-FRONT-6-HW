import React from 'react'

export const CarpetCard = ({ img, title, carpet_h, carpet_w, state, comment, price }) => {
  return (
    <div >
      <img src={img} alt={title} />
    </div>
  )
}
