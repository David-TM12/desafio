import * as C from './styles';
import { ChangeEvent, ReactComponentElement } from "react";

interface InputProps{
    type: string;
    placeholder: string;
    value: string;
    onChange: any;
}

export function Input({type, placeholder, value, onChange}: InputProps){
    return (
        <C.Input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}