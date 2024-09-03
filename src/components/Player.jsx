import React, { useState, useRef } from "react";

function Player() {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState();
  //   const [submited, setSubmited] = useState();

  function handleClick() {
    setEnteredName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unkown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

export default Player;
