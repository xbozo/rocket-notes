import * as C from "./styles";

export const Button = (props) => {
    return (
        <C.Container  type="button">
            {props.title}
        </C.Container>
    )
}