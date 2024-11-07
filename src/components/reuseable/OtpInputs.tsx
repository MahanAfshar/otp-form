"use client";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

interface Props {
    length?: number;
    className?: string;
}

export default function OtpInputs({
    length = 5,
    className
}: Props) {
    const inputs = new Array(length).fill('');
    const refInputs = useRef<(HTMLInputElement | null)[]>([]);
    const [otp, setOtp] = useState(inputs);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if(value && index < length - 1)
            refInputs.current[index + 1]?.focus();
        
        let newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
    };

    const backspaceHandler = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if(!otp[index] && index > 0 && e.key == 'Backspace')
            refInputs.current[index - 1]?.focus();
    };

    const clickHandler = (index: number) => {
        refInputs.current[index]?.setSelectionRange(1, 1);
    };

    return (
        <div className="flex items-center justify-between grow">
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    value={value}
                    autoFocus={index == 0}
                    className={`w-1/5 border border-black/50 rounded-xl text-center p-4 text-4xl selection:bg-transparent ${className}`}
                    ref={element => {refInputs.current[index] = element}}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => backspaceHandler(e, index)}
                    onClick={() => clickHandler(index)}
                />
            ))}
        </div>
    );
}
