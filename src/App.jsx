import React, { useState } from 'react';

function App() {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      fields: [
        { id: 1, name: 'Full Name', type: 'text', value: '' },
        { id: 2, name: 'Email', type: 'email', value: '' },
        { id: 3, name: 'Age', type: 'number', value: '' },
        { id: 4, name: 'Gender', type: 'elect', options: ['Male', 'Female', 'Other'], value: '' },
        { id: 5, name: 'Available Positions', type: 'elect', options: ['Frontend', 'Backend', 'Fullstack'], value: '' },
        { id: 6, name: 'Programming Languages', type: 'elect', options: ['JavaScript', 'Python', 'Java'], value: '' },
        { id: 7, name: 'Password', type: 'password', value: '' },
      ],
    },
  ]);

  const handleChange = (formId, fieldId, value) => {
    setFormFields(prevForms => prevForms.map(form => {
      if (form.id === formId) {
        return {
         ...form,
          fields: form.fields.map(field => field.id === fieldId? {...field, value } : field),
        };
      }
      return form;
    }));
  };

  const addForm = () => {
    const newFormId = formFields.length + 1;
    const newForm = {
      id: newFormId,
      fields: [...formFields[0].fields],
    };
    setFormFields(prevForms => [...prevForms, newForm]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formFields);
  };

  return (
    <div className="app">
      <h1></h1>
      <h2></h2>
      <p>Let's get you on board.</p>
      <form onSubmit={handleSubmit}>
        {formFields.map((form, formIndex) => (
          <div key={form.id}>
            {form.fields.map((field, fieldIndex) => (
              <div key={field.id}>
                <label htmlFor={field.name}>{field.name}:</label>
                {field.type === 'elect'? (
                  <select id={field.name} value={field.value} onChange={(e) => handleChange(form.id, field.id, e.target.value)}>
                    {field.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input type={field.type} id={field.name} value={field.value} onChange={(e) => handleChange(form.id, field.id, e.target.value)} />
                )}
              </div>
            ))}
          </div>
        ))}
        <button type="button" onClick={addForm}>Add More</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;