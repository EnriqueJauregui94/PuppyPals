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
                <p><span className="bold-text">Name:</span> <strong>{featuredPup.name}</strong></p>
                <p><span className="bold-text">ID:</span> <strong>{featuredPup.id}</strong></p>
                <p><span className="bold-text">Email:</span> <strong>{featuredPup.email}</strong></p>
                <p><span className="bold-text">isCute:</span> <strong>{featuredPup.isCute ? 'Yes' : 'No'}</strong></p>
                <p><span className="bold-text">Age:</span> <strong>{featuredPup.age}</strong></p>
                <p><span className="bold-text">Owner ID:</span> <strong>{featuredPup.ownerId}</strong></p>
                <p><span className="bold-text">Tricks:</span></p>
                <ul className="TricksList">
                  {featuredPup.tricks.map((trick) => (
                    <li key={trick.id}><strong>{trick.title}</strong></li>
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
