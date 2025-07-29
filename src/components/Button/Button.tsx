import React from "react";
import { baseButtonClass, swapCornerLines } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className={baseButtonClass}>
            <span className="relative z-10 px-4 py-2">{label}</span>
            {swapCornerLines.map((cls, i) => (
                <span key={i} className={cls} />
            ))}
        </button>
    );
};

export default Button;
