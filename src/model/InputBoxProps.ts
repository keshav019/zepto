import { ReactNode } from "react";

interface InputBoxProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    children?: ReactNode;
}

export default InputBoxProps;