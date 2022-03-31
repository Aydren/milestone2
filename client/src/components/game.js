import {LogoRender} from "./logoRen";
import Board from "./board";
import {decadeSwitch} from "./logoRen";
import KeyboardWindow from "./keyboard";

function Game() {
  return (
    <div>
      <br />
      <div>
        <LogoRender />
      </div>
      <br />
      <button onClick={decadeSwitch}>Decade Switch</button>
      <h1>Guess that logo</h1>
      <Board />
      <div id="answer"></div>
      <div>
        <h2>keyboard section</h2>
        <KeyboardWindow />
      </div>

    </div>
  );
}

export default Game;