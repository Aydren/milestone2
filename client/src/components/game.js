import {LogoRender} from "./logoRen";
import Board from "./board";
import {decadeSwitch} from "./logoRen";

function Game() {
  return (
    <div>
      <div>
        <LogoRender />
      </div>
      <h1>Guess that logo</h1>
      <Board />
      <div id="answer"></div>
      <div>
        <h2>keyboard section</h2>
      </div>
      <button onClick={decadeSwitch}>Decade Switch</button>

    </div>
  );
}

export default Game;
