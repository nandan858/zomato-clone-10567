import React from 'react';
import classNames from 'classnames';

const InfoButton = ({children, ...props}) => {
  return (
    <button
    className={classNames(
      "flex items-center gap-3 border  px-4 py-2 border-black rounded-lg",
      {
        "bg-zomato-300 text-white border-none" : props.isActive,
      }
    )}>
      {children}
    </button>
    
  )
}

export default InfoButton