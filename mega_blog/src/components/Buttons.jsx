import React from 'react'

function Buttons({
    children,
    type = 'button',
    bgColor = 'blue-600',
    textColor = 'text-white',
    className = '',
    ...props 


}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
            )
}

export default Buttons