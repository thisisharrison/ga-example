import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // @ts-ignore
        window.dataLayer.push({
            event: "gtm.linkClick",
        });
        console.log("link click");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="#" onClick={onClick}>
                    Click and <span>check</span> GA
                </a>
            </header>
        </div>
    );
}

export default App;
