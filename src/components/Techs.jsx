import React from 'react'

const Techs = ({ skill, srcImg }) => {
  return (
    <div className="item">
      <img src={srcImg} />
      <p className=" tracking-widest font-semibold text-[.625rem] md:text-xs">
        {skill}
      </p>
    </div>
  )
}

export default Techs
