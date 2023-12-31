import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="grid grid-cols-2 gap-4 bg-md-blue">
                    <div className="grid justify-items-end content-center gap-4">
                        <h5 className="pl-2">Hi, my name is</h5>
                        <h1 className="pl-2">BrandonDHaskell</h1>
                        <p className="pl-2 text-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <img
                            id="round-corners-profile"
                            src="/Profile_Pic_2_medium.jpg"
                            alt="Profile"
                            className="px-6"
                            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
