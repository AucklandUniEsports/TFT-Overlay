'use client';

import { useState } from "react";

export default function Home() {

  return (
    <nav className="home-navigation">
      <h1>TFT Overlay</h1>
      <ol>
        <li>
          <a href="player/1" target="_blank">Player 1</a>
        </li>
        <li>
          <a href="player/2" target="_blank">Player 2</a>
        </li>
        <li>
          <a href="player/3" target="_blank">Player 3</a>
        </li>
        <li>
          <a href="player/4" target="_blank">Player 4</a>
        </li>
        <li>
          <a href="player/5" target="_blank">Player 5</a>
        </li>
        <li>
          <a href="player/6" target="_blank">Player 6</a>
        </li>
        <li>
          <a href="player/7" target="_blank">Player 7</a>
        </li>
        <li>
          <a href="player/8" target="_blank">Player 8</a>
        </li>
      </ol>
    </nav>
  );
}