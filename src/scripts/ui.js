// eslint-disable-next-line import/extensions
import createTemplate from './template.js';

function createUI({
  appendKeyboard,
  dict,
  methodsForButtons,
  allText,
  selectionIndex,
  textAreaWidth,
  textAreaHeight,
  observer,
}) {
  appendKeyboard(createTemplate(dict));

  const keyboard = document.querySelector('.keyboard');
  const textarea = keyboard.querySelector('.screen_textarea');
  textarea.innerHTML = allText;
  textarea.style.width = `${textAreaWidth}px`;
  textarea.style.height = `${textAreaHeight}px`;
  const allButtons = keyboard.querySelectorAll('.button');

  const methods = methodsForButtons(textarea);

  observer.observe(textarea);

  class UImethods {
    static changeTextareaStyleProperty(property, value) {
      textarea.style[property] = value;
    }

    static focusTextarea() {
      textarea.focus();
    }

    static changeTextareaInnerHTML(value) {
      textarea.innerHTML = value;
    }

    static setTextareaSelectionStart(value) {
      textarea.selectionStart = value;
    }

    static setTextareaSelectionEnd(value) {
      textarea.selectionEnd = value;
    }

    static getTextareaSelectionStart() {
      return textarea.selectionStart;
    }
  }

  UImethods.setTextareaSelectionStart(selectionIndex);
  UImethods.setTextareaSelectionEnd(selectionIndex);
  UImethods.focusTextarea();

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

  methods.methodForAlphanumericButton(firstRowFirstButton, dict.Backquote);
  methods.methodForAlphanumericButton(firstRowSecondButton, dict.Digit1);
  methods.methodForAlphanumericButton(firstRowThirdButton, dict.Digit2);
  methods.methodForAlphanumericButton(firstRowForthThirdButton, dict.Digit3);
  methods.methodForAlphanumericButton(firstRowFifthButton, dict.Digit4);
  methods.methodForAlphanumericButton(firstRowSixButton, dict.Digit5);
  methods.methodForAlphanumericButton(firstRowSeventhButton, dict.Digit6);
  methods.methodForAlphanumericButton(firstRowEighthButton, dict.Digit7);
  methods.methodForAlphanumericButton(firstRowNinthButton, dict.Digit8);
  methods.methodForAlphanumericButton(firstRowTenthButton, dict.Digit9);
  methods.methodForAlphanumericButton(firstRowEleventhButton, dict.Digit0);
  methods.methodForAlphanumericButton(firstRowTwelfthButton, dict.Minus);
  methods.methodForAlphanumericButton(firstRowThirteenthButton, dict.Equal);
  methods.methodForBackspace(firstRowButtonBackspace);

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

  methods.methodForTabButton(secondRowButtonTab);
  methods.methodForAlphanumericButton(secondRowFirstButton, dict.KeyQ);
  methods.methodForAlphanumericButton(secondRowSecondButton, dict.KeyW);
  methods.methodForAlphanumericButton(secondRowThirdButton, dict.KeyE);
  methods.methodForAlphanumericButton(secondRowForthButton, dict.KeyR);
  methods.methodForAlphanumericButton(secondRowFifthButton, dict.KeyT);
  methods.methodForAlphanumericButton(secondRowSixButton, dict.KeyY);
  methods.methodForAlphanumericButton(secondRowSeventhButton, dict.KeyU);
  methods.methodForAlphanumericButton(secondRowEighthButton, dict.KeyI);
  methods.methodForAlphanumericButton(secondRowNinthButton, dict.KeyO);
  methods.methodForAlphanumericButton(secondRowTenthButton, dict.KeyP);
  methods.methodForAlphanumericButton(secondRowEleventhButton, dict.BracketRight);
  methods.methodForAlphanumericButton(secondRowTwelfthButton, dict.BracketLeft);
  methods.methodForAlphanumericButton(secondRowThirteenthButton, dict.Backslash);
  methods.methodForDelete(secondRowButtonDelete);

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
  methods.methodForAlphanumericButton(thirdRowFirstButton, dict.KeyA);
  methods.methodForAlphanumericButton(thirdRowSecondButton, dict.KeyS);
  methods.methodForAlphanumericButton(thirdRowThirdButton, dict.KeyD);
  methods.methodForAlphanumericButton(thirdRowForthThirdButton, dict.KeyF);
  methods.methodForAlphanumericButton(thirdRowFifthButton, dict.KeyG);
  methods.methodForAlphanumericButton(thirdRowSixButton, dict.KeyH);
  methods.methodForAlphanumericButton(thirdRowSeventhButton, dict.KeyJ);
  methods.methodForAlphanumericButton(thirdRowEighthButton, dict.KeyK);
  methods.methodForAlphanumericButton(thirdRowNinthButton, dict.KeyL);
  methods.methodForAlphanumericButton(thirdRowTenthButton, dict.Semicolon);
  methods.methodForAlphanumericButton(thirdRowEleventhButton, dict.Quote);
  methods.methodForAlphanumericButton(thirdRowButtonEnter, '\n');

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

  methods.methodForShiftButton(forthRowButtonShiftLeft, 'ShiftLeft');
  methods.methodForAlphanumericButton(forthRowFirstButton, dict.KeyZ);
  methods.methodForAlphanumericButton(forthRowSecondButton, dict.KeyX);
  methods.methodForAlphanumericButton(forthRowThirdButton, dict.KeyC);
  methods.methodForAlphanumericButton(forthRowForthButton, dict.KeyV);
  methods.methodForAlphanumericButton(forthRowFifthButton, dict.KeyB);
  methods.methodForAlphanumericButton(forthRowSixButton, dict.KeyN);
  methods.methodForAlphanumericButton(forthRowSeventhButton, dict.KeyM);
  methods.methodForAlphanumericButton(forthRowEighthButton, dict.Comma);
  methods.methodForAlphanumericButton(forthRowNinthButton, dict.Period);
  methods.methodForAlphanumericButton(forthRowTenthButton, dict.Slash);
  methods.methodForAlphanumericButton(forthRowArrowUp, dict.ArrowUp);
  methods.methodForShiftButton(forthRowButtonShiftRight, 'ShiftRight');

  // ПЯТЫЙ РЯД КЛАВИШ
  const fifthRowButtonCtrlLeft = keyboard.querySelector('.key_ControlLeft');
  const fifthRowButtonWin = keyboard.querySelector('.key_MetaLeft');
  const fifthRowAltLeft = keyboard.querySelector('.key_AltLeft');
  const fifthRowFlag = keyboard.querySelector('.flag');
  const fifthRowSpace = keyboard.querySelector('.key_Space');
  const fifthRowAltRight = keyboard.querySelector('.key_AltRight');
  const fifthRowArrowLeft = keyboard.querySelector('.key_ArrowLeft');
  const fifthRowArrowDown = keyboard.querySelector('.key_ArrowDown');
  const fifthRowArrowRight = keyboard.querySelector('.key_ArrowRight');
  const fifthRowButtonCtrlRight = keyboard.querySelector('.key_ControlRight');

  methods.methodForAlphanumericButton(fifthRowButtonCtrlLeft);
  methods.methodForAlphanumericButton(fifthRowButtonWin);
  methods.methodForAlphanumericButton(fifthRowAltLeft);
  methods.methodForAlphanumericButton(fifthRowSpace, dict.Space);
  methods.methodForAlphanumericButton(fifthRowAltRight);
  methods.methodForAlphanumericButton(fifthRowArrowLeft, dict.ArrowLeft);
  methods.methodForAlphanumericButton(fifthRowArrowDown, dict.ArrowDown);
  methods.methodForAlphanumericButton(fifthRowArrowRight, dict.ArrowRight);
  methods.methodForAlphanumericButton(fifthRowButtonCtrlRight);

  methods.highlightButtonShiftLeft(forthRowButtonShiftLeft);
  methods.highlightButtonShiftRight(forthRowButtonShiftRight);
  methods.highlightButtonCapsLock(thirdRowButtonCapsLock);

  fifthRowFlag.style.backgroundImage = dict.flag;

  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    // console.log(`ui.js-'keydown'__${event.code}`);
    methods.addClassForAnimation(event.code, allButtons);
    methods.methodsForControlKeys(event.code, textarea);
    methods.addSymbolToTextareaByKeyboard(event.code, textarea);
  });

  document.addEventListener('keyup', (event) => {
    // console.log(`UI.JS-'KEYUP'__+++${event.code}`);
    methods.deactivateShift(event.code);
    methods.trackCapslockButtonWasReleased(event.code);
    methods.removeClassForAnimation(event.code, allButtons);
  });

  textarea.addEventListener('click', () => {
    // console.log(`ui.js позиция курсора ${textarea.selectionStart}`);
    methods.setSelectionIndex(textarea.selectionStart);
  });

  return UImethods;
}

export default createUI;
