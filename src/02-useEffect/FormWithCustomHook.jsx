// import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onReset, username, email, password  } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return(
        <>
            <h1>Form con custom hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-2" onClick={onReset}>Reset</button>

        </>
    )
}
