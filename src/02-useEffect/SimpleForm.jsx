import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Steven',
        email:'steven@correo.com'
    });

    const { username, email } = formState;

    const onInputChange = ( {target} ) => {
        const {name, value} = target;
        
        setFormState({
            ...formState,
            [name] : value
        });
    }

    useEffect( () => {
        // console.log('useEffect called');
    },[]);

    useEffect( () => {
        // console.log('formState change');
    },[formState]);

    useEffect( () => {
        // console.log('email change');
    },[email]);
    

    return(
        <>
            <h1>SimpleForm</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="ejemplo@ejemplo.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            {
                (username === 'Steven2') ? <Message/> : false
            }
        </>
    )
}
