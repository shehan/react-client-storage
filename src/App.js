import React from "react";
import LocalSessionStorage from './LocalSessionStorage'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LocalSessionStorage/>
            </div>
        )
    }
}

export default App;
