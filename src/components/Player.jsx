import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);

  function handleClick() {
    setName(playerName.current.value.trim());
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input
          id="player-name"
          type="text"
          aria-label="Player name"
          ref={playerName}
        />
        <button type="button" onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
