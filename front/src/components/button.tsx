import { useState } from 'react';

interface Props {
    text: string
}

const Button = ({text}:Props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 150); // Reset after animation duration
    };

    return (
        <button
            className={`bg-red-600 mx-5 px-5 py-1 rounded transition transform ${isClicked ? 'scale-95' : 'scale-100'}`}
            onClick={handleClick}
        >
         {text}   
        </button>
    );
}

export default Button;
