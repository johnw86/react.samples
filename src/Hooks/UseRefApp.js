import React, { useRef } from "react";

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
