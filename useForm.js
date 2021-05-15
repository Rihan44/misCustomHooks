import { useState } from 'react';

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset];

}


// LO QUE HACE
/* 
Recibe un objeto que trae los campos de texto
Luego el handleInput lee rapidamente el input
*/
