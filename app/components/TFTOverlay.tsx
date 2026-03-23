'use client';

import { useState } from "react";

export default function TFTOverlay({player_number}:{player_number:string}) {
  const [playerName, setPlayerName] = useState("Player Name");

  return (
    <>
      <main className="viewport">
        <div className="player">
          <div className="player-cam"/>
          <div className="player-info">
            <div className="player-number">
              <p>{player_number}</p>
            </div>
            <p className="player-name">{playerName}</p>
          </div>
        </div>

        <div className="logos">
          <img className="logo" src="./sandbox_logo.png" alt="" />
        </div>
      </main>
      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Enter player name"
        />
      </div>
    </>
  );
}