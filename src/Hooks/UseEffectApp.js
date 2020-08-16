import React, { useState, useEffect } from "react";

const UseEffectApp = () => {
    const [user, setUser] = useState({});
    const loadProfile = async () => {
        try {
            const result = await fetch("https://api.github.com/users/johnw86", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "same-origin",
            });
            const data = await result.json();
            setUser(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <>
            {user.id && (
                <div>
                    <img src={user.avatar_url} alt="avatar" width="50" />
                    <h1>
                        {user.name} ({user.company})
                    </h1>
                </div>
            )}
        </>
    );
};

export default UseEffectApp;
