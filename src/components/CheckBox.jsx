import React from 'react'

function CheckBox({id,type, label, value=''|| false, onChange,}) {
  return (
    <div className='check-bx'>
    <input id={id} type={type} value={label}  onChange={onChange} />
    <label htmlFor={id} >{label}</label>
    </div>
  )
}

export default CheckBox