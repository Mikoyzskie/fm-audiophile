import React from 'react';

interface ButtonProps {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
    return (
        <a href={`/${title}`} className="sub-title button-3 flex items-center hover:text-[#d87d4a]">
            SHOP
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.322 1l5 5-5 5"
                    stroke="#D87D4A"
                    strokeWidth="2" // Change to camelCase strokeWidth
                    fill="none"
                    fillRule="evenodd" // Change to camelCase fillRule
                />
            </svg>
        </a>
    );
};

export default Button;
