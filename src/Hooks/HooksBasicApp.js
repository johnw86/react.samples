import React, { useState } from "react";

function HooksBasicApp(props) {
    return (
        <div>
            <h1>Hooks Basic Example</h1>
            <Games />
        </div>
    );
}

export default HooksBasicApp;

function Games() {
    const [games, setGames] = useState([
        {
            name: "Sonic",
            released: 1991,
            rating: 5
        },
        {
            name: "Lemmings",
            released: 1991,
            rating: 4
        },
        {
            name: "Road Rash",
            released: 1991,
            rating: 4.5
        }
    ]);

    const addGame = event => {
        event.preventDefault();
        const newGame = {
            name: event.target.name.value,
            released: event.target.released.value,
            rating: event.target.rating.value
        };

        setGames([...games, newGame]);
    };

    return (
        <React.Fragment>
            {games.map(function(game, index) {
                return (
                    <div key={index}>
                        <h3>
                            {game.name} ({game.released})
                        </h3>
                        <p>
                            <span>{game.rating}/5</span>
                        </p>
                        <hr></hr>
                    </div>
                );
            })}
            <form onSubmit={addGame}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"></input>
                <br></br>
                <label htmlFor="released">Released</label>
                <input type="text" id="released" name="released"></input>
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" name="rating"></input>
                <br></br>
                <button type="submit">Add</button>
            </form>
        </React.Fragment>
    );
}
