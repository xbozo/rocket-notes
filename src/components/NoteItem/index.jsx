import * as C from "./styles";
import {  FiPlus, FiX } from "react-icons/fi"

export const NoteItem = ({ $isNew, value, onClick, ...rest }) => {         // Forma desestruturada de receber uma prop
    return (
        <C.Container $isNew={$isNew} >
            <input 
                type="text"
                value={value}
                readOnly={!$isNew}
                {...rest}
            />

            <button type="button" onClick={onClick}>
                {$isNew ? <FiPlus /> : <FiX/>}
            </button>
        </C.Container>
    )
}