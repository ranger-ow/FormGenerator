import React from 'react';
import FormField from './FormField.jsx';

const FormFieldsList = ({ fields, errors, onFieldChange, onRemoveField }) => {
  
  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}> 
          <FormField
            {...field}
            onChange={e => onFieldChange(field.id, e.target.value)}
          />
          {errors[index] && <div key={index} style={{ color: 'red' }}>{errors[index]}</div>}
          <button key={field.id} className='remove-btn'  onClick={(e) => onRemoveField(field.id,e)}>Remove</button>
        </div>
      ))}
      
    </div>
  );
};

export default FormFieldsList;
