import * as C from "./styles";

export const Tag = ({title, ...rest }) => {
    return (
        <C.Container {...rest}>
            {title}
        </C.Container>
    )
}