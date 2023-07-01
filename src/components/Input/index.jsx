import * as C from "./styles";

export const Input = ({ icon: Icon, ...rest }) => {         // Forma desestruturada de receber uma prop
    return (
        <C.Container>
            {Icon &&
                <Icon size={20} />
            }
            <input  
                {...rest}
            />

        </C.Container>
    )
}