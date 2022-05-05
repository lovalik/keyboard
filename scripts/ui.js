import createTemplate from './template.js';

function createUI({
  container,
  dict,
  methodsForButtons,
  allText,
  textAreaWidth,
  textAreaHeight,
  observer,
}) {
  container.innerHTML = createTemplate(dict);
  const keyboard = container.querySelector('.keyboard');
  const textarea = keyboard.querySelector('.screen_textarea');
  textarea.innerHTML = allText;
  textarea.style.width = `${textAreaWidth}px`;
  textarea.style.height = `${textAreaHeight}px`;
  const allButtons = keyboard.querySelectorAll('.button');

  const methods = methodsForButtons(textarea);

  observer.observe(textarea);

  // ПЕРВЫЙ РЯД КЛАВИШ
  const firstRowFirstButton = keyboard.querySelector('.key_Backquote');
  const firstRowSecondButton = keyboard.querySelector('.key_Digit1');
  const firstRowThirdButton = keyboard.querySelector('.key_Digit2');
  const firstRowForthThirdButton = keyboard.querySelector('.key_Digit3');
  const firstRowFifthButton = keyboard.querySelector('.key_Digit4');
  const firstRowSixButton = keyboard.querySelector('.key_Digit5');
  const firstRowSeventhButton = keyboard.querySelector('.key_Digit6');
  const firstRowEighthButton = keyboard.querySelector('.key_Digit7');
  const firstRowNinthButton = keyboard.querySelector('.key_Digit8');
  const firstRowTenthButton = keyboard.querySelector('.key_Digit9');
  const firstRowEleventhButton = keyboard.querySelector('.key_Digit0');
  const firstRowTwelfthButton = keyboard.querySelector('.key_Minus');
  const firstRowThirteenthButton = keyboard.querySelector('.key_Equal');
  const firstRowButtonBackspace = keyboard.querySelector('.key_Backspace');

  methods.methodForAlphanumericButton(textarea, firstRowFirstButton, dict.Backquote);
  methods.methodForAlphanumericButton(textarea, firstRowSecondButton, dict.Digit1);
  methods.methodForAlphanumericButton(textarea, firstRowThirdButton, dict.Digit2);
  methods.methodForAlphanumericButton(textarea, firstRowForthThirdButton, dict.Digit3);
  methods.methodForAlphanumericButton(textarea, firstRowFifthButton, dict.Digit4);
  methods.methodForAlphanumericButton(textarea, firstRowSixButton, dict.Digit5);
  methods.methodForAlphanumericButton(textarea, firstRowSeventhButton, dict.Digit6);
  methods.methodForAlphanumericButton(textarea, firstRowEighthButton, dict.Digit7);
  methods.methodForAlphanumericButton(textarea, firstRowNinthButton, dict.Digit8);
  methods.methodForAlphanumericButton(textarea, firstRowTenthButton, dict.Digit9);
  methods.methodForAlphanumericButton(textarea, firstRowEleventhButton, dict.Digit0);
  methods.methodForAlphanumericButton(textarea, firstRowTwelfthButton, dict.Minus);
  methods.methodForAlphanumericButton(textarea, firstRowThirteenthButton, dict.Equal);
  methods.methodForBackspace(textarea, firstRowButtonBackspace);

  // ВТОРОЙ РЯД КЛАВИШ
  const secondRowButtonTab = keyboard.querySelector('.key_Tab');
  const secondRowFirstButton = keyboard.querySelector('.key_KeyQ');
  const secondRowSecondButton = keyboard.querySelector('.key_KeyW');
  const secondRowThirdButton = keyboard.querySelector('.key_KeyE');
  const secondRowForthButton = keyboard.querySelector('.key_KeyR');
  const secondRowFifthButton = keyboard.querySelector('.key_KeyT');
  const secondRowSixButton = keyboard.querySelector('.key_KeyY');
  const secondRowSeventhButton = keyboard.querySelector('.key_KeyU');
  const secondRowEighthButton = keyboard.querySelector('.key_KeyI');
  const secondRowNinthButton = keyboard.querySelector('.key_KeyO');
  const secondRowTenthButton = keyboard.querySelector('.key_KeyP');
  const secondRowEleventhButton = keyboard.querySelector('.key_BracketLeft');
  const secondRowTwelfthButton = keyboard.querySelector('.key_BracketRight');
  const secondRowThirteenthButton = keyboard.querySelector('.key_Backslash');
  const secondRowButtonDelete = keyboard.querySelector('.key_Delete');

  // methods.changeSymbolRegister(RowButtonTab, '    ' );
  methods.methodForAlphanumericButton(textarea, secondRowFirstButton, dict.KeyQ);
  methods.methodForAlphanumericButton(textarea, secondRowSecondButton, dict.KeyW);
  methods.methodForAlphanumericButton(textarea, secondRowThirdButton, dict.KeyE);
  methods.methodForAlphanumericButton(textarea, secondRowForthButton, dict.KeyR);
  methods.methodForAlphanumericButton(textarea, secondRowFifthButton, dict.KeyT);
  methods.methodForAlphanumericButton(textarea, secondRowSixButton, dict.KeyY);
  methods.methodForAlphanumericButton(textarea, secondRowSeventhButton, dict.KeyU);
  methods.methodForAlphanumericButton(textarea, secondRowEighthButton, dict.KeyI);
  methods.methodForAlphanumericButton(textarea, secondRowNinthButton, dict.KeyO);
  methods.methodForAlphanumericButton(textarea, secondRowTenthButton, dict.KeyP);
  methods.methodForAlphanumericButton(textarea, secondRowEleventhButton, dict.BracketRight);
  methods.methodForAlphanumericButton(textarea, secondRowTwelfthButton, dict.BracketLeft);
  methods.methodForAlphanumericButton(textarea, secondRowThirteenthButton, dict.Backslash);
  methods.methodForDelete(textarea, secondRowButtonDelete);

  // methods.methodForAlphanumericButton( secondRowButtonDelete, dict[ 'button_delete' ] );

  // ТРЕТИЙ РЯД КЛАВИШ
  const thirdRowButtonCapsLock = keyboard.querySelector('.key_CapsLock');
  const thirdRowFirstButton = keyboard.querySelector('.key_KeyA');
  const thirdRowSecondButton = keyboard.querySelector('.key_KeyS');
  const thirdRowThirdButton = keyboard.querySelector('.key_KeyD');
  const thirdRowForthThirdButton = keyboard.querySelector('.key_KeyF');
  const thirdRowFifthButton = keyboard.querySelector('.key_KeyG');
  const thirdRowSixButton = keyboard.querySelector('.key_KeyH');
  const thirdRowSeventhButton = keyboard.querySelector('.key_KeyJ');
  const thirdRowEighthButton = keyboard.querySelector('.key_KeyK');
  const thirdRowNinthButton = keyboard.querySelector('.key_KeyL');
  const thirdRowTenthButton = keyboard.querySelector('.key_Semicolon');
  const thirdRowEleventhButton = keyboard.querySelector('.key_Quote');
  const thirdRowButtonEnter = keyboard.querySelector('.key_Enter');

  methods.methodForCapsLock(thirdRowButtonCapsLock);
  methods.methodForAlphanumericButton(textarea, thirdRowFirstButton, dict.KeyA);
  methods.methodForAlphanumericButton(textarea, thirdRowSecondButton, dict.KeyS);
  methods.methodForAlphanumericButton(textarea, thirdRowThirdButton, dict.KeyD);
  methods.methodForAlphanumericButton(textarea, thirdRowForthThirdButton, dict.KeyF);
  methods.methodForAlphanumericButton(textarea, thirdRowFifthButton, dict.KeyG);
  methods.methodForAlphanumericButton(textarea, thirdRowSixButton, dict.KeyH);
  methods.methodForAlphanumericButton(textarea, thirdRowSeventhButton, dict.KeyJ);
  methods.methodForAlphanumericButton(textarea, thirdRowEighthButton, dict.KeyK);
  methods.methodForAlphanumericButton(textarea, thirdRowNinthButton, dict.KeyL);
  methods.methodForAlphanumericButton(textarea, thirdRowTenthButton, dict.Semicolon);
  methods.methodForAlphanumericButton(textarea, thirdRowEleventhButton, dict.Quote);
  methods.methodForAlphanumericButton(textarea, thirdRowButtonEnter, '\n');

  // ЧЕТВЕРТЫЙ РЯД КЛАВИШ
  const forthRowButtonShiftLeft = keyboard.querySelector('.key_ShiftLeft');
  const forthRowFirstButton = keyboard.querySelector('.key_KeyZ');
  const forthRowSecondButton = keyboard.querySelector('.key_KeyX');
  const forthRowThirdButton = keyboard.querySelector('.key_KeyC');
  const forthRowForthButton = keyboard.querySelector('.key_KeyV');
  const forthRowFifthButton = keyboard.querySelector('.key_KeyB');
  const forthRowSixButton = keyboard.querySelector('.key_KeyN');
  const forthRowSeventhButton = keyboard.querySelector('.key_KeyM');
  const forthRowEighthButton = keyboard.querySelector('.key_Comma');
  const forthRowNinthButton = keyboard.querySelector('.key_Period');
  const forthRowTenthButton = keyboard.querySelector('.key_Slash');
  const forthRowArrowUp = keyboard.querySelector('.key_ArrowUp');
  const forthRowButtonShiftRight = keyboard.querySelector('.key_ShiftRight');

  methods.methodForAlphanumericButton(textarea, forthRowButtonShiftLeft);
  methods.methodForAlphanumericButton(textarea, forthRowFirstButton, dict.KeyZ);
  methods.methodForAlphanumericButton(textarea, forthRowSecondButton, dict.KeyX);
  methods.methodForAlphanumericButton(textarea, forthRowThirdButton, dict.KeyC);
  methods.methodForAlphanumericButton(textarea, forthRowForthButton, dict.KeyV);
  methods.methodForAlphanumericButton(textarea, forthRowFifthButton, dict.KeyB);
  methods.methodForAlphanumericButton(textarea, forthRowSixButton, dict.KeyN);
  methods.methodForAlphanumericButton(textarea, forthRowSeventhButton, dict.KeyM);
  methods.methodForAlphanumericButton(textarea, forthRowEighthButton, dict.Comma);
  methods.methodForAlphanumericButton(textarea, forthRowNinthButton, dict.Period);
  methods.methodForAlphanumericButton(textarea, forthRowTenthButton, dict.Slash);
  methods.methodForAlphanumericButton(textarea, forthRowArrowUp, dict.ArrowUp);
  methods.methodForAlphanumericButton(textarea, forthRowButtonShiftRight);

  // ПЯТЫЙ РЯД КЛАВИШ
  const fifthRowButtonCtrl = keyboard.querySelector('.key_ControlLeft');
  const fifthRowButtonWin = keyboard.querySelector('.key_MetaLeft');
  const fifthRowAltLeft = keyboard.querySelector('.key_AltLeft');
  const fifthRowFlag = keyboard.querySelector('.flag');
  const fifthRowSpace = keyboard.querySelector('.key_Space');
  const fifthRowAltRight = keyboard.querySelector('.key_AltRight');
  const fifthRowArrowLeft = keyboard.querySelector('.key_ArrowLeft');
  const fifthRowArrowDown = keyboard.querySelector('.key_ArrowDown');
  const fifthRowArrowRight = keyboard.querySelector('.key_ArrowRight');

  const flag = keyboard.querySelector('.message_flag');

  methods.methodForAlphanumericButton(textarea, fifthRowButtonCtrl);
  methods.methodForAlphanumericButton(textarea, fifthRowButtonWin);
  methods.methodForAlphanumericButton(textarea, fifthRowAltLeft);
  methods.methodForAlphanumericButton(textarea, fifthRowSpace, dict.Space);
  methods.methodForAlphanumericButton(textarea, fifthRowAltRight);
  methods.methodForAlphanumericButton(textarea, fifthRowArrowLeft, dict.ArrowLeft);
  methods.methodForAlphanumericButton(textarea, fifthRowArrowDown, dict.ArrowDown);
  methods.methodForAlphanumericButton(textarea, fifthRowArrowRight, dict.ArrowRight);

  methods.highlightButtonShiftLeft(forthRowButtonShiftLeft);
  methods.highlightButtonShiftRight(forthRowButtonShiftRight);
  methods.highlightButtonCapsLock(thirdRowButtonCapsLock);

  methods.changeFlag(fifthRowFlag, flag);

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    console.log(`ui.js-'keydown'__${event.code}`);
    // methods.preventSimultaneousPressing();
    methods.addClassForAnimation(event.code, allButtons);
    methods.methodsForControlKeys(event.code, textarea);
    methods.addSymbolToTextareaByKeyboard(event.code, textarea);
  });

  document.addEventListener('keyup', (event) => {
    console.log(`UI.JS-'KEYUP'__+++${event.code}`);

    methods.deactivateShift(event.code);
    methods.removeClassForAnimation(event.code, allButtons);
  });

  textarea.addEventListener('click', () => {
    console.log(`ui.js позиция курсора ${textarea.selectionStart}`);
    methods.setSelectionIndex(textarea.selectionStart);
  });
}

export default createUI;
