import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/userAuth';
import * as C from './styles';

export function Signup() {
    const [email, setEmail] = useState('');
    const [emailConf, setEmailConf] = useState('');
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signup } = useAuth();

    async function handleSignup() {

        if (!email || !emailConf || !senha || !name) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const response = await signup({ email, senha, name });

        if (response.status != 201) {
            setError(response.message ?? ' ');
            return;
        }

        alert('usuário cadastrado com sucesso');
        navigate("/");
    }

    return (
        <C.Container>
            <C.Label>CADASTRO DE USUARIO</C.Label>
            <C.Content>
                <Input
                    type='text'
                    placeholder='Informe seu nome de usuário'
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setName(e.target.value), setError('')]}
                />

                <Input
                    type='email'
                    placeholder='Digite seu email'
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setEmail(e.target.value), setError('')]}
                />

                <Input
                    type='email'
                    placeholder='Confirme seu email'
                    value={emailConf}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setEmailConf(e.target.value), setError('')]}
                />

                <Input
                    type='password'
                    placeholder='Digite seu senha'
                    value={senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => [setSenha(e.target.value), setError('')]}
                />

                <C.labelError>{error}</C.labelError>
                <Button Text='Inscreve-se' onClick={handleSignup} />
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
}