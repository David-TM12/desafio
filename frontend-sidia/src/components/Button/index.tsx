import * as C from './styles';

interface ButtonProps {
    Text: string;
    onClick: () => void,
    Type?: string;
}

export function Button ({Text, onClick, Type="button"}: ButtonProps) {
    return (
        <C.Button type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    )
}