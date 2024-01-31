// FormField.js
import React from 'react';
import Input from './Input';
import CheckBox from './CheckBox';
import TextArea from './TextArea';
import DropDown from './DropDown';

const FormField = ({ id,type, label, options, value=''|| false, onChange,que }) => {
    
  const renderField = () => {
    switch (type) {
     
      case 'textarea':
        return <TextArea id={id} value={value} onChange={onChange}/>  
      case 'dropdown':
        return (
          <DropDown id={id}  label={label} options={options} value={value} onChange={onChange}/>
          
        );
      case 'checkbox':
        return (
            <CheckBox id={id} onChange={onChange} label={label} type={type} />
        );
      case 'radio':
        return (
        <div className='check-bx'>
        <input id={id} type="radio" value={label} onChange={onChange} />
        <label htmlFor={id} >{label}</label>
        </div>
        );
      default:
        return  <Input  id={id} type={type} value={value} onChange={onChange} />;
    }
  };

  return (
    <div>

      {type==='checkbox' || type==='radio' ? <label className='question'>{que}</label>:<label>{label}</label> }
      {renderField()}
    </div>
  );
};

export default FormField;
