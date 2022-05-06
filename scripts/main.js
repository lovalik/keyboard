// eslint-disable-next-line import/extensions
import createUI from './ui.js';
// eslint-disable-next-line import/extensions
import dictionary from './dictionary.js';

function createKeyboard() {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'container';
  document.body.append(keyboardContainer);
  // localStorage.clear()

  let language = localStorage.getItem('language');
  let shiftState = localStorage.getItem('shiftState');
  let shiftButton = localStorage.getItem('shiftButton');
  let capslockState = localStorage.getItem('capslockState');
  let capslockButtonWasUp = localStorage.getItem('capslockButtonWasUp');
  let allText = localStorage.getItem('allText');
  const arrayOfAllText = localStorage.getItem('array');
  let selectionIndex = localStorage.getItem('selectionIndex');
  let textAreaWidth = localStorage.getItem('textAreaWidth');
  let textAreaHeight = localStorage.getItem('textAreaHeight');
  let initiatorOfReload = null;
  let ctrl = false;
  let array;

  // eslint-disable-next-line max-len
  // console.log(`память: ${language}______${shiftState}__${shiftButton}_caps${capslockState}__${capslockButtonWasUp}__${allText}___( ${textAreaWidth}-X-${textAreaHeight} )`);
  // console.log(`память: ${array}___${selectionIndex}`);
  if (language === null) {
    language = 'eng';
  }

  if (capslockState === null) {
    capslockState = 'capslock_off';
    capslockButtonWasUp = true;
    shiftState = 'shift_off';
  }

  const dict = dictionary[language][capslockState][shiftState];

  if (allText === null && arrayOfAllText === null) {
    allText = '';
    array = [];
    selectionIndex = 0;
  } else {
    array = arrayOfAllText.split(',');
    selectionIndex = Number(selectionIndex);
  }

  if (textAreaWidth === null && textAreaHeight === null) {
    textAreaWidth = 1000;
    textAreaHeight = 300;
  }

  // eslint-disable-next-line max-len
  // console.log(`перезагрузки: ${language}_${shiftState}_caps${capslockState}__${capslockButtonWasUp}_${allText} )`);
  // console.log(`после перезагрузки: ${array}___selind${selectionIndex}`);

  const observer = new ResizeObserver((entries) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        textAreaWidth = Math.round(entry.contentBoxSize[0].inlineSize);
        textAreaHeight = Math.round(entry.contentBoxSize[0].blockSize);
        // console.log(` ширина ${textAreaWidth} X высота ${textAreaHeight}`);
      }
    }
  });

  function appendKeyboard(keyboard) {
    keyboardContainer.innerHTML = keyboard;
  }

  const UImethods = createUI({
    appendKeyboard,
    dict,
    // eslint-disable-next-line no-use-before-define
    methodsForButtons,
    allText,
    selectionIndex,
    textAreaWidth,
    textAreaHeight,
    observer,
  });

  localStorage.clear();

  function methodsForButtons() {
    let timeoutIdForAddSymbol;
    let intervalIdForAddSymbol;

    function setCursor() {
      UImethods.focusTextarea();
      UImethods.changeTextareaStyleProperty('caretColor', 'transparent');
      setTimeout(() => {
        UImethods.changeTextareaStyleProperty('caretColor', 'black');
        // console.log( `set cursor: будет поставлен в позицию ${ selectionIndex}` );
        UImethods.setTextareaSelectionStart(selectionIndex);
        UImethods.setTextareaSelectionEnd(selectionIndex);
      });
    }

    function writeKeyboardParametersToLocalStorage() {
      localStorage.setItem('language', language);
      localStorage.setItem('shiftState', shiftState);
      localStorage.setItem('shiftButton', shiftButton);
      localStorage.setItem('capslockState', capslockState);
      localStorage.setItem('capslockButtonWasUp', capslockButtonWasUp);
      localStorage.setItem('allText', allText);
      localStorage.setItem('array', array);
      localStorage.setItem('selectionIndex', selectionIndex);
      localStorage.setItem('textAreaWidth', textAreaWidth);
      localStorage.setItem('textAreaHeight', textAreaHeight);
    }

    function addSymbol(text) {
      // console.log(`таймерID ${timeoutIdForAddSymbol}`);

      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === null) {
          // console.log('отказ');
          selectionIndex = UImethods.getTextareaSelectionStart();
        }
        // console.log(`++++++++++++++${selectionIndex}`);
        // const tail = array.splice(selectionIndex, array.length);
        array = array.concat(text, array.splice(selectionIndex, array.length));

        // console.log(`array___${JSON.stringify(array)}`);

        selectionIndex += 1;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            array = array.concat(text, array.splice(selectionIndex, array.length));
            // console.log(`array___${JSON.stringify(array)}`);
            setCursor();
            selectionIndex += 1;
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 50);
        }, 600);
      }
    }

    function deleteSymbol() {
      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === array.length) return;

        array.splice(selectionIndex, 1);
        // console.log(`array___${JSON.stringify(array)}`);
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            if (selectionIndex === array.length) return;
            array.splice(selectionIndex, 1);
            // console.log(`array___${JSON.stringify(array)}`);
            setCursor();
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 30);
        }, 600);
      }
    }

    function backspaceSymbol() {
      // console.log(`таймерID ${timeoutIdForAddSymbol}`);

      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === 0) {
          // console.log('отказ');
          return;
        }

        array.splice(selectionIndex - 1, 1);
        // console.log(`array___${JSON.stringify(array)}`);
        selectionIndex -= 1;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            if (selectionIndex === 0) {
              // console.log('отказ');
              return;
            }
            array.splice(selectionIndex - 1, 1);
            // console.log(`array___${JSON.stringify(array)}`);
            selectionIndex -= 1;
            setCursor();
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 30);
        }, 600);
      }
    }

    function tab() {
      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === null) {
          // console.log('отказ');
          selectionIndex = UImethods.getTextareaSelectionStart();
        }
        // console.log(`++++++++++++++${selectionIndex}`);
        // const tail = array.splice(selectionIndex, array.length);
        array = array.concat(' ', ' ', ' ', ' ', array.splice(selectionIndex, array.length));

        // console.log(`array___${JSON.stringify(array)}`);

        selectionIndex += 4;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            array = array.concat(' ', ' ', ' ', ' ', array.splice(selectionIndex, array.length));
            // console.log(`array___${JSON.stringify(array)}`);
            setCursor();
            selectionIndex += 4;
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 50);
        }, 600);
      }
    }

    function changeLanguage() {
      if (ctrl !== true) {
        return;
      }

      if (language === 'rus') {
        language = 'eng';
      } else {
        language = 'rus';
      }
      writeKeyboardParametersToLocalStorage();
      initiatorOfReload = 'keyboard';
      document.location.reload();
    }

    function changeSymbolRegister() {
      if (capslockState === 'capslock_on' && capslockButtonWasUp === true) {
        capslockState = 'capslock_off';
        capslockButtonWasUp = false;
      } else if (capslockState === 'capslock_off' && capslockButtonWasUp === true) {
        capslockState = 'capslock_on';
        capslockButtonWasUp = false;
      } else {
        return;
      }

      writeKeyboardParametersToLocalStorage();
      initiatorOfReload = 'keyboard';
      document.location.reload();
    }

    function activateShift(eventCode) {
      if (shiftState === 'shift_off') {
        shiftState = 'shift_on';
        shiftButton = eventCode;
        writeKeyboardParametersToLocalStorage();
        document.location.reload();
      }
    }

    function deactivateShift(eventCode) {
      if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
        shiftState = 'shift_off';
        shiftButton = null;
        writeKeyboardParametersToLocalStorage();
        document.location.reload();
      }
    }

    function addAnimationWhenDownMouseButton(event) {
      event.classList.add('animation');
    }

    function removeAnimationWhenUpMouseButton(event) {
      event.classList.remove('animation');
      clearInterval(timeoutIdForAddSymbol);
      clearTimeout(intervalIdForAddSymbol);
      timeoutIdForAddSymbol = undefined;
      intervalIdForAddSymbol = undefined;
    }

    function highlightButtonCapsLock(button) {
      if (capslockState === 'capslock_on') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftLeft(button) {
      if (shiftState === 'shift_on' && shiftButton === 'ShiftLeft') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftRight(button) {
      if (shiftState === 'shift_on' && shiftButton === 'ShiftRight') {
        button.classList.add('animation');
      }
    }

    function checkIsControlButton(eventCode) {
      switch (eventCode) {
        case 'CapsLock':
        case 'Tab':
        case 'ControlLeft':
        case 'ControlRight':
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
        case 'Enter':
        case 'Backspace':
        case 'Delete':
          return true;
        default:
          return false;
      }
    }

    function methodsForControlKeys(eventCode) {
      switch (eventCode) {
        case 'Delete':
          deleteSymbol();
          break;
        case 'Space':
          addSymbol(dict.Space);
          break;
        case 'Backspace':
          backspaceSymbol();
          break;
        case 'CapsLock':
          changeSymbolRegister();
          break;
        case 'ShiftLeft':
          activateShift(eventCode);
          break;
        case 'ShiftRight':
          activateShift(eventCode);
          break;
        case 'ControlLeft':
          ctrl = true;
          break;
        case 'ControlRight':
          ctrl = true;
          break;
        case 'AltLeft':
          changeLanguage();
          break;
        case 'AltRight':
          changeLanguage();
          break;
        case 'Enter':
          addSymbol('\n');
          break;
        case 'Tab':
          tab();
          break;
        default: break;
      }
    }

    function addSymbolToTextareaByKeyboard(eventCode) {
      if (!checkIsControlButton(eventCode)) {
        const match = eventCode.match(/([\w]{1,10})$/);
        // console.log(`совпадение класса ${match[1]}__словарь${dict[match[1]]}`);
        addSymbol(dict[match[1]]);
      }
    }

    function addClassForAnimation(event, buttonsCollection) {
      for (let i = 0; i < buttonsCollection.length; i += 1) {
        if (buttonsCollection[i].classList.contains(`key_${event}`)) {
          buttonsCollection[i].classList.add('animation');
        }
      }
    }

    function removeClassForAnimation(eventCode, buttonsCollection) {
      if (eventCode !== 'CapsLock') {
        for (let i = 0; i < buttonsCollection.length; i += 1) {
          if (buttonsCollection[i].classList.contains(`key_${eventCode}`)) {
            buttonsCollection[i].classList.remove('animation');
          }
        }

        clearInterval(timeoutIdForAddSymbol);
        clearTimeout(intervalIdForAddSymbol);
        timeoutIdForAddSymbol = undefined;
        intervalIdForAddSymbol = undefined;
      }

      if (eventCode === 'ControlLeft' || eventCode === 'ControlRight') {
        ctrl = false;
      }
    }

    function methodForCapsLock(elem) {
      elem.addEventListener('mousedown', () => {
        capslockButtonWasUp = true;
        changeSymbolRegister();
      });
    }

    function hangEventListenersForMouseAlpahumericButton(elem, callback, symbol) {
      elem.addEventListener('mousedown', (event) => {
        event.preventDefault();
        setCursor();
        callback(symbol);
        addAnimationWhenDownMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseup', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseout', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });
    }

    function methodForAlphanumericButton(elem, symbol) {
      hangEventListenersForMouseAlpahumericButton(elem, addSymbol, symbol);
    }

    function methodForBackspace(elem) {
      hangEventListenersForMouseAlpahumericButton(elem, backspaceSymbol);
    }

    function methodForDelete(elem) {
      hangEventListenersForMouseAlpahumericButton(elem, deleteSymbol);
    }

    function setSelectionIndex(value) {
      selectionIndex = value;
    }

    function methodForShiftButton(elem, eventCode) {
      hangEventListenersForMouseAlpahumericButton(elem, activateShift, eventCode);

      elem.addEventListener('mouseup', () => {
        deactivateShift(eventCode);
      });
    }

    function methodForTabButton(elem) {
      hangEventListenersForMouseAlpahumericButton(elem, tab);
    }

    function trackCapslockButtonWasUp(eventCode) {
      if (eventCode === 'CapsLock') {
        capslockButtonWasUp = true;
      }
    }

    return {
      addClassForAnimation,
      removeClassForAnimation,
      deactivateShift,
      highlightButtonCapsLock,
      highlightButtonShiftLeft,
      highlightButtonShiftRight,
      addSymbolToTextareaByKeyboard,
      methodsForControlKeys,
      methodForAlphanumericButton,
      methodForBackspace,
      methodForDelete,
      methodForCapsLock,
      setSelectionIndex,
      methodForShiftButton,
      methodForTabButton,
      trackCapslockButtonWasUp,
    };
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      if (initiatorOfReload !== 'keyboard') {
        localStorage.setItem('language', language);
      }
    }
  });
}

export default createKeyboard;
