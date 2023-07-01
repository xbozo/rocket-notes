import * as C from "./styles";

export const TextArea = ({ value, ...rest }) => {         // Forma desestruturada de receber uma prop
    return (
        <C.Container {...rest}>
            {value}
        </C.Container>
    )
}