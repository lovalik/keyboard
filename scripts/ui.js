// eslint-disable-next-line import/extensions
import createTemplate from './template.js';

function createUI({
  appendKeyboard,
  dict,
  methodsForButtons,
  allText,
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

  // ПЕРВЫЙ РЯД КЛАВИШ
  const firstRowFirstButton = keyboard.querySelector('.key_backquote');
  const firstRowSecondButton = keyboard.querySelector('.key_digit-1');
  const firstRowThirdButton = keyboard.querySelector('.key_digit-2');
  const firstRowForthThirdButton = keyboard.querySelector('.key_digit-3');
  const firstRowFifthButton = keyboard.querySelector('.key_digit-4');
  const firstRowSixButton = keyboard.querySelector('.key_digit-5');
  const firstRowSeventhButton = keyboard.querySelector('.key_digit-6');
  const firstRowEighthButton = keyboard.querySelector('.key_digit-7');
  const firstRowNinthButton = keyboard.querySelector('.key_digit-8');
  const firstRowTenthButton = keyboard.querySelector('.key_digit-9');
  const firstRowEleventhButton = keyboard.querySelector('.key_digit-0');
  const firstRowTwelfthButton = keyboard.querySelector('.key_minus');
  const firstRowThirteenthButton = keyboard.querySelector('.key_equal');
  const firstRowButtonBackspace = keyboard.querySelector('.key_backspace');

  methods.methodForAlphanumericButton(firstRowFirstButton, dict.backquote);
  methods.methodForAlphanumericButton(firstRowSecondButton, dict.digit1);
  methods.methodForAlphanumericButton(firstRowThirdButton, dict.digit2);
  methods.methodForAlphanumericButton(firstRowForthThirdButton, dict.digit3);
  methods.methodForAlphanumericButton(firstRowFifthButton, dict.digit4);
  methods.methodForAlphanumericButton(firstRowSixButton, dict.digit5);
  methods.methodForAlphanumericButton(firstRowSeventhButton, dict.digit6);
  methods.methodForAlphanumericButton(firstRowEighthButton, dict.digit7);
  methods.methodForAlphanumericButton(firstRowNinthButton, dict.digit8);
  methods.methodForAlphanumericButton(firstRowTenthButton, dict.digit9);
  methods.methodForAlphanumericButton(firstRowEleventhButton, dict.digit0);
  methods.methodForAlphanumericButton(firstRowTwelfthButton, dict.minus);
  methods.methodForAlphanumericButton(firstRowThirteenthButton, dict.equal);
  methods.methodForBackspace(firstRowButtonBackspace);

  // ВТОРОЙ РЯД КЛАВИШ
  const secondRowButtonTab = keyboard.querySelector('.key_tab');
  const secondRowFirstButton = keyboard.querySelector('.key_key-Q');
  const secondRowSecondButton = keyboard.querySelector('.key_key-W');
  const secondRowThirdButton = keyboard.querySelector('.key_key-E');
  const secondRowForthButton = keyboard.querySelector('.key_key-R');
  const secondRowFifthButton = keyboard.querySelector('.key_key-T');
  const secondRowSixButton = keyboard.querySelector('.key_key-Y');
  const secondRowSeventhButton = keyboard.querySelector('.key_key-U');
  const secondRowEighthButton = keyboard.querySelector('.key_key-I');
  const secondRowNinthButton = keyboard.querySelector('.key_key-O');
  const secondRowTenthButton = keyboard.querySelector('.key_key-P');
  const secondRowEleventhButton = keyboard.querySelector('.key_bracket-left');
  const secondRowTwelfthButton = keyboard.querySelector('.key_bracket-right');
  const secondRowThirteenthButton = keyboard.querySelector('.key_backslash');
  const secondRowButtonDelete = keyboard.querySelector('.key_delete');

  methods.methodForTabButton(secondRowButtonTab);
  methods.methodForAlphanumericButton(secondRowFirstButton, dict.keyQ);
  methods.methodForAlphanumericButton(secondRowSecondButton, dict.keyW);
  methods.methodForAlphanumericButton(secondRowThirdButton, dict.keyE);
  methods.methodForAlphanumericButton(secondRowForthButton, dict.keyR);
  methods.methodForAlphanumericButton(secondRowFifthButton, dict.keyT);
  methods.methodForAlphanumericButton(secondRowSixButton, dict.keyY);
  methods.methodForAlphanumericButton(secondRowSeventhButton, dict.keyU);
  methods.methodForAlphanumericButton(secondRowEighthButton, dict.keyI);
  methods.methodForAlphanumericButton(secondRowNinthButton, dict.keyO);
  methods.methodForAlphanumericButton(secondRowTenthButton, dict.keyP);
  methods.methodForAlphanumericButton(secondRowEleventhButton, dict.bracketRight);
  methods.methodForAlphanumericButton(secondRowTwelfthButton, dict.bracketLeft);
  methods.methodForAlphanumericButton(secondRowThirteenthButton, dict.backslash);
  methods.methodForDelete(secondRowButtonDelete);

  // methods.methodForAlphanumericButton( secondRowButtonDelete, dict[ 'button_delete' ] );

  // ТРЕТИЙ РЯД КЛАВИШ
  const thirdRowButtonCapsLock = keyboard.querySelector('.key_capslock');
  const thirdRowFirstButton = keyboard.querySelector('.key_key-A');
  const thirdRowSecondButton = keyboard.querySelector('.key_key-S');
  const thirdRowThirdButton = keyboard.querySelector('.key_key-D');
  const thirdRowForthThirdButton = keyboard.querySelector('.key_key-F');
  const thirdRowFifthButton = keyboard.querySelector('.key_key-G');
  const thirdRowSixButton = keyboard.querySelector('.key_key-H');
  const thirdRowSeventhButton = keyboard.querySelector('.key_key-J');
  const thirdRowEighthButton = keyboard.querySelector('.key_key-K');
  const thirdRowNinthButton = keyboard.querySelector('.key_key-L');
  const thirdRowTenthButton = keyboard.querySelector('.key_semicolon');
  const thirdRowEleventhButton = keyboard.querySelector('.key_quote');
  const thirdRowButtonEnter = keyboard.querySelector('.key_enter');

  methods.methodForCapsLock(thirdRowButtonCapsLock);
  methods.methodForAlphanumericButton(thirdRowFirstButton, dict.keyA);
  methods.methodForAlphanumericButton(thirdRowSecondButton, dict.keyS);
  methods.methodForAlphanumericButton(thirdRowThirdButton, dict.keyD);
  methods.methodForAlphanumericButton(thirdRowForthThirdButton, dict.keyF);
  methods.methodForAlphanumericButton(thirdRowFifthButton, dict.keyG);
  methods.methodForAlphanumericButton(thirdRowSixButton, dict.keyH);
  methods.methodForAlphanumericButton(thirdRowSeventhButton, dict.keyJ);
  methods.methodForAlphanumericButton(thirdRowEighthButton, dict.keyK);
  methods.methodForAlphanumericButton(thirdRowNinthButton, dict.keyL);
  methods.methodForAlphanumericButton(thirdRowTenthButton, dict.semicolon);
  methods.methodForAlphanumericButton(thirdRowEleventhButton, dict.quote);
  methods.methodForAlphanumericButton(thirdRowButtonEnter, '\n');

  // ЧЕТВЕРТЫЙ РЯД КЛАВИШ
  const forthRowButtonShiftLeft = keyboard.querySelector('.key_shift-left');
  const forthRowFirstButton = keyboard.querySelector('.key_key-Z');
  const forthRowSecondButton = keyboard.querySelector('.key_key-X');
  const forthRowThirdButton = keyboard.querySelector('.key_key-C');
  const forthRowForthButton = keyboard.querySelector('.key_key-V');
  const forthRowFifthButton = keyboard.querySelector('.key_key-B');
  const forthRowSixButton = keyboard.querySelector('.key_key-N');
  const forthRowSeventhButton = keyboard.querySelector('.key_key-M');
  const forthRowEighthButton = keyboard.querySelector('.key_comma');
  const forthRowNinthButton = keyboard.querySelector('.key_period');
  const forthRowTenthButton = keyboard.querySelector('.key_slash');
  const forthRowArrowUp = keyboard.querySelector('.key_arrow-up');
  const forthRowButtonShiftRight = keyboard.querySelector('.key_shift-right');

  methods.methodForShiftButton(forthRowButtonShiftLeft, 'ShiftLeft');
  methods.methodForAlphanumericButton(forthRowFirstButton, dict.keyZ);
  methods.methodForAlphanumericButton(forthRowSecondButton, dict.keyX);
  methods.methodForAlphanumericButton(forthRowThirdButton, dict.keyC);
  methods.methodForAlphanumericButton(forthRowForthButton, dict.keyV);
  methods.methodForAlphanumericButton(forthRowFifthButton, dict.keyB);
  methods.methodForAlphanumericButton(forthRowSixButton, dict.keyN);
  methods.methodForAlphanumericButton(forthRowSeventhButton, dict.keyM);
  methods.methodForAlphanumericButton(forthRowEighthButton, dict.comma);
  methods.methodForAlphanumericButton(forthRowNinthButton, dict.period);
  methods.methodForAlphanumericButton(forthRowTenthButton, dict.slash);
  methods.methodForAlphanumericButton(forthRowArrowUp, dict.arrowUp);
  methods.methodForShiftButton(forthRowButtonShiftRight, 'ShiftRight');

  // ПЯТЫЙ РЯД КЛАВИШ
  const fifthRowButtonCtrl = keyboard.querySelector('.key_control-left');
  const fifthRowButtonWin = keyboard.querySelector('.key_meta-left');
  const fifthRowAltLeft = keyboard.querySelector('.key_alt-left');
  const fifthRowFlag = keyboard.querySelector('.flag');
  const fifthRowSpace = keyboard.querySelector('.key_space');
  const fifthRowAltRight = keyboard.querySelector('.key_alt-right');
  const fifthRowArrowLeft = keyboard.querySelector('.key_arrow-left');
  const fifthRowArrowDown = keyboard.querySelector('.key_arrow-down');
  const fifthRowArrowRight = keyboard.querySelector('.key_arrow-right');

  const flag = keyboard.querySelector('.message_flag');

  methods.methodForAlphanumericButton(fifthRowButtonCtrl);
  methods.methodForAlphanumericButton(fifthRowButtonWin);
  methods.methodForAlphanumericButton(fifthRowAltLeft);
  methods.methodForAlphanumericButton(fifthRowSpace, dict.space);
  methods.methodForAlphanumericButton(fifthRowAltRight);
  methods.methodForAlphanumericButton(fifthRowArrowLeft, dict.arrowLeft);
  methods.methodForAlphanumericButton(fifthRowArrowDown, dict.arrowDown);
  methods.methodForAlphanumericButton(fifthRowArrowRight, dict.arrowRight);

  methods.highlightButtonShiftLeft(forthRowButtonShiftLeft);
  methods.highlightButtonShiftRight(forthRowButtonShiftRight);
  methods.highlightButtonCapsLock(thirdRowButtonCapsLock);

  fifthRowFlag.style.backgroundImage = dict.flag;
  flag.disabled = true;
  flag.style.backgroundImage = dict.contrFlag;

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

  function changeTextareaStyleProperty(property, value) {
    textarea.style[property] = value;
  }

  function focusTextarea() {
    textarea.focus();
  }

  function changeTextareaInnerHTML(value) {
    textarea.innerHTML = value;
  }

  function setTextareaSelectionStart(value) {
    textarea.selectionStart = value;
  }

  function setTextareaSelectionEnd(value) {
    textarea.selectionEnd = value;
  }

  function getTextareaSelectionStart() {
    return textarea.selectionStart;
  }

  return {
    changeTextareaStyleProperty,
    focusTextarea,
    changeTextareaInnerHTML,
    setTextareaSelectionStart,
    setTextareaSelectionEnd,
    getTextareaSelectionStart,
  };
}

export default createUI;
