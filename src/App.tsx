import React, {Fragment} from 'react';
import MapView from "./views/MapView";
import './App.css';
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
    return (
        <Fragment>
            <Header />
            <main className="App-main">
                <MapView/>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
