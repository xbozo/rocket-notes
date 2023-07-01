import * as C from "./styles";

export const Section = (props) => {
    return (
        <C.Container>
           <h2>{props.title}</h2>
           {props.children}
        </C.Container>
    )
}