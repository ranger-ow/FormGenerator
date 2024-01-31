import React from 'react'

function Radio({id,type, label,  onChange}) {
  return (
    <div className='check-bx'>
        <input id={id} type={type} value={label} onChange={onChange} />
        <label htmlFor={id} >{label}</label>
        </div>
  )
}

export default Radio