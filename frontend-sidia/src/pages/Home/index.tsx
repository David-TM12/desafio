import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import * as C from "./styles";
import { useAuth } from "../../hooks/userAuth";

export function Home() {
    const navigate = useNavigate();
    const user = useAuth();


    return (
        <C.Container>
            <C.Title>AGENDAMENTO DE AULAS</C.Title>
                <C.Label> Seja bem vindo {user.user.name}</C.Label>
            <Button Text="Sair" onClick={() => [navigate("/")]} />
        </C.Container>
    )
}
