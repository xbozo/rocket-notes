import * as C from "./styles";
import { RiShutDownLine } from "react-icons/ri"

export const Header = () => {
    return (
        <C.Container>
            <C.Profile to="/profile">
                <img 
                    src="https://github.com/xbozo.png" 
                    alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Guilherme Viana</strong>
                </div>
            </C.Profile>

            <C.Logout>
                <RiShutDownLine />
            </C.Logout>
        </C.Container>
    )
}