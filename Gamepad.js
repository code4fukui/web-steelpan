let gamepadhandler = null;
export const setGamepadHandler = (h) => gamepadhandler = h;

const buttonPressed = b => {
  if (typeof b == "object") {
    return b.pressed;
  }
  return b == 1.0;
};

const bkbuttons = {};
let ngamepads = 0;

addEventListener("gamepadconnected", e => {
  ngamepads++;
  if (ngamepads == 1) {
    const loop = () => {
      const gamepads = navigator.getGamepads();
      if (gamepadhandler) {
        for (const gamepad of gamepads) {
          if (!gamepad) continue;
          const buttons = gamepad.buttons;
          for (let i = 0; i < buttons.length; i++) {
            const p = buttonPressed(buttons[i]);
            if (bkbuttons[gamepad.id] === undefined) {
              bkbuttons[gamepad.id] = [];
            }
            const bkp = bkbuttons[gamepad.id][i] || false;
            if (p != bkp) {
              gamepadhandler(i, p, gamepad.id);
              bkbuttons[gamepad.id][i] = p;
            }
          }
        }
      }
      if (ngamepads > 0) requestAnimationFrame(loop);
    };
    loop();
  }
});
addEventListener("gamepaddisconnected", e => {
  ngamepads--;
});
