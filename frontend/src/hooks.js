import { useState } from "react";

const useForm = (updateFormFunction, initialFormData) => {
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        updateFormFunction(formData); 
    };

    const handleChange = (evt) => {
        const target = evt.target;
        setFormData( oldData => ({...oldData, [target.name]: target.value}));
    };

    return {formData, setFormData, handleSubmit, handleChange}
    
};

export { useForm };