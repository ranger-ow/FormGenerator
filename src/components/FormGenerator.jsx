import React, { useState,useId } from 'react';
import FormFieldsList from './FormFieldsList.jsx';


const FormGenerator = () => {
    const uid=useId();
  const [fields, setFields] = useState([]);
  const [newFieldType, setNewFieldType] = useState('');
  const [newFieldLabel, setNewFieldLabel] = useState('');
  const [newFieldOptions, setNewFieldOptions] = useState([]);
  const [errors, setErrors] = useState({});
  const [que,setQue]=useState('');
  
  const handleFieldChange = (id, newValue) => {
    console.log(id,newValue)
    

    setFields((prevFields) => {
      const updatedFields = [...prevFields];
      return updatedFields.map((field)=>{ 

        if(field.id === id){
            if(field.type === 'checkbox' || field.type === 'radio'){
                
                field.value= field.label;
            }else{
                
                field.value=newValue;
            }
        }
        return field;
          
    })}
)}
  

  const handleAddField = (e) => {
    e.preventDefault();
    if (!newFieldLabel) {
      setErrors({ label: 'Label is required' });
      return;
    }
    const newField = {
        id: fields.length+1+uid,
        type: newFieldType,
        label: newFieldLabel,
        options: newFieldOptions,
        value: ((newFieldType === 'checkbox'|| newFieldType ==='radio') ? newFieldLabel : (newFieldType===Number? 0 :'') ),
        que
    };

    setFields(prevFields => [...prevFields, newField]);
    setNewFieldLabel('');
    setNewFieldOptions([]);
    setErrors({});
  };

  const handleQueChange=(e)=>{
    setQue(e.target.value);
  }

  const handleRemoveField = (id,e) => {
    e.preventDefault();
    setFields(prevFields => prevFields.filter((field) => field.id !== id));
  };

  const handleTypeChange = e => {
    setNewFieldType(e.target.value);
  };

  const handleLabelChange = e => {
    setNewFieldLabel(e.target.value);
    if (errors.label) {
      setErrors(prevErrors => ({ ...prevErrors, label: '' }));
    }
  };

  const handleOptionsChange = e => {
    setNewFieldOptions(e.target.value.split(',').map(option => option.trim()));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = {};
    let isValid = true;

    //Validation for required fields
    fields.forEach((field, index) => {

      if (!field.value) {
        formErrors[index] = 'This field is required';
        isValid = false;  
      }
    });

    if (isValid) {
      //Submission logic

      console.log('Form submitted:', fields);
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputType=(e)=>{
    e.preventDefault();
    setNewFieldType(e.target.value)

  }

  return (
    <div>
      <h1>Form Generator</h1>
      <div>
        <label htmlFor="fieldType">Field Type:</label>
        <select id="fieldType" value={newFieldType} onChange={handleTypeChange}>
          <option value='' disabled >--Please choose an option--</option>
          <option value="checkbox">Checkbox</option>
          <option value="dropdown">Dropdown</option>
          <option value="input">Input Type</option>   
          <option value="textarea">Textarea</option>
          <option value="radio">Radio Button</option>
        </select>
      </div>

      {newFieldType === 'dropdown' && (
        <div>
          <label htmlFor="options">Options (comma-separated):</label>
          <input type="text" id="options" value={newFieldOptions.join(',')} onChange={handleOptionsChange} />
        </div>
      )}

      {
        ( newFieldType === 'checkbox' || newFieldType === 'radio') && (
          <div>
          <label htmlFor="que">To Ask For:</label>
          <input type="text" id="que" value={que} onChange={handleQueChange} />
          </div>
        )
      }
      {
        newFieldType === 'input' && (
          <div>
          <label htmlFor="itype">Provide Input Type:</label>
          <select id="itype" value={newFieldType} onChange={handleInputType}>
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="number">Number </option>
            <option value="date"> Date</option>
          </select>
          </div>
        )
      }
      <div>
        <label htmlFor="fieldLabel">Label:</label>
        <input type="text" id="fieldLabel" value={newFieldLabel} onChange={handleLabelChange} />
        {errors.label && <div style={{ color: 'red' }}>{errors.label}</div>}
      </div>
      <button onClick={handleAddField}>Add Field</button>
      <FormFieldsList
        fields={fields}
        errors={errors}
        onFieldChange={handleFieldChange}
        onRemoveField={handleRemoveField}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FormGenerator;
