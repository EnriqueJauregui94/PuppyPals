import React, { useState } from 'react';
import './App.css';
import './index.css';
import { puppyList } from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      <div className="AppContainer">
        <h1>🐾Puppy Pals🐾</h1>
        <div className="PuppyContainer">
          {puppies.map((puppy) => (
            <p
              className="PuppyName"
              onClick={() => { setFeatPupId(puppy.id); }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          ))}
          {featuredPup && (
            <div className="FeaturedPuppy">
              <h2 className="FeaturedPuppy" style={{ backgroundImage: 'none' }}>🐾Featured Puppy🐾</h2>
              <div className="PuppyInfoBox">
                <p>Name: {featuredPup.name}</p>
                <p>ID: {featuredPup.id}</p>
                <p>Email: {featuredPup.email}</p>
                <p>isCute: {featuredPup.isCute ? 'Yes' : 'No'}</p>
                <p>Age: {featuredPup.age}</p>
                <p>Owner ID: {featuredPup.ownerId}</p>
                <p>Tricks:</p>
                <ul className="TricksList">
                  {featuredPup.tricks.map((trick) => (
                    <li key={trick.id}>{trick.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
