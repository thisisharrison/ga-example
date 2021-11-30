import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        ga("send", "event", {
            eventCategory: "Testing Category",
            eventAction: "click",
            eventLabel: e.currentTarget.className,
        });
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="#" onClick={onClick}>
                    Click and check GA
                </a>
            </header>
        </div>
    );
}

export default App;
