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
        console.log("In use effect");
        loadProfile();

        return () => {
            console.log("In useEffect clean up");
        };
    }, []); 
    /*
    Pass into the array any value which should be compared before each effect, 
    meaning if the value has not changed on re-render the effect would not run e.g. [user] would only run if count had changed
    Run only once -pass an empty array ([]) as a second argument. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run., 
    Not passing a second parameter means it will run after every effect.
    */
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
