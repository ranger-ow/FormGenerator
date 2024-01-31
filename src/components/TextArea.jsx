import React from 'react'

function TextArea({id,onChange,value}) {
  return (
    <textarea id={id} value={value} onChange={onChange} />
  )
}

export default TextArea