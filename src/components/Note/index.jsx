import * as C from "./styles";

import { Tag }  from "../Tag"

export const Note = ({ data, ...rest }) => {        // forma desestruturada de receber uma prop
    return (
        <C.Container {...rest}>
            <h1>{data.title}</h1>

            {data.tags &&
                <footer>
                    {data.tags.map(tag => 
                        <Tag key={tag.id} title={tag.name} 
                    />)}
                </footer>
            }
        </C.Container>
    )
}