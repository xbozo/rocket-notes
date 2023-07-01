import * as C from "./styles";

export const ButtonText = (props) => {
    return (
        <C.Container 
            type="button" 
            isActive={props.isActive}
        >
            {props.title}
        </C.Container>
    )
}