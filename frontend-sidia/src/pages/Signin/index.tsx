import * as C from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useState, ChangeEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/userAuth";

interface UserProps {
    email: string;
    senha: string;
}

export function Signin() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signin } = useAuth();


    async function handleLogin() {

        const response = await signin({ email, senha });

        if (response.status != 201) {
            setError(response.message ?? ' ');
            return;
        }

        navigate('/home');
    }


    return (
        <C.Container>
            <C.Label>LOGIN</C.Label>
            <C.Content>
                <Input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setEmail(e.target.value), setError('')]}
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setSenha(e.target.value), setError('')]}
                />
                <C.labelError>{error}</C.labelError>
                <Button
                    Text="Entrar"
                    onClick={handleLogin}
                />
                <C.LabelSignup>
                    Não tem uma conta?
                    <C.Strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content >
        </C.Container>

    )
}