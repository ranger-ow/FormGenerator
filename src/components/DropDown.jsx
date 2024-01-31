import React from 'react'

function DropDown({ id, options, value = '' || false, onChange}) {
    return (
        <div>
            
            <select id={id} value={value} onChange={onChange}>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown