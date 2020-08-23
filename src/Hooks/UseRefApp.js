import React, { useRef } from "react";

/* 
The useRef hook gives us the ability to have a persistant value which will 
not change across renders, and will not trigger a render when updated
*/
const UseRefApp = () => {
    const inputRef = useRef({});

    const onReset = () => {
        inputRef.current.value = "";
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button type="button" onClick={onReset}>
                Reset Form
            </button>
        </>
    );
};

export default UseRefApp;
