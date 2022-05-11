// eslint-disable-next-line import/extensions
import createUI from './ui.js';
// eslint-disable-next-line import/extensions
import dictionary from './dictionary.js';

function createKeyboard() {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.className = 'container';
  document.body.append(keyboardContainer);

  let language = localStorage.getItem('language');
  let shiftState = localStorage.getItem('shiftState');
  let shiftButtonEventCode = localStorage.getItem('shiftButtonEventCode');
  let capslockState = localStorage.getItem('capslockState');
  let capslockButtonWasReleased = localStorage.getItem('capslockButtonWasReleased');
  let allText = localStorage.getItem('allText');
  const arrayOfAllText = localStorage.getItem('array');
  let selectionIndex = localStorage.getItem('selectionIndex');
  let textAreaWidth = localStorage.getItem('textAreaWidth');
  let textAreaHeight = localStorage.getItem('textAreaHeight');
  let initiatorOfReload = null;
  let ctrlActivate = false;
  let altActivate = false;
  let array;

  if (language === null) {
    language = 'eng';
  }

  if (capslockState === null) {
    capslockState = 'capslockOff';
    capslockButtonWasReleased = 'yes';
    shiftState = 'shiftOff';
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
    textAreaWidth = 950;
    textAreaHeight = 300;
  }

  const observer = new ResizeObserver((entries) => {
  // eslint-disable-next-line no-restricted-syntax
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        textAreaWidth = Math.round(entry.contentBoxSize[0].inlineSize);
        textAreaHeight = Math.round(entry.contentBoxSize[0].blockSize);
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
        UImethods.setTextareaSelectionStart(selectionIndex);
        UImethods.setTextareaSelectionEnd(selectionIndex);
      });
    }

    function writeKeyboardParametersToLocalStorage() {
      localStorage.setItem('language', language);
      localStorage.setItem('shiftState', shiftState);
      localStorage.setItem('shiftButtonEventCode', shiftButtonEventCode);
      localStorage.setItem('capslockState', capslockState);
      localStorage.setItem('capslockButtonWasReleased', capslockButtonWasReleased);
      localStorage.setItem('allText', allText);
      localStorage.setItem('array', array);
      localStorage.setItem('selectionIndex', selectionIndex);
      localStorage.setItem('textAreaWidth', textAreaWidth);
      localStorage.setItem('textAreaHeight', textAreaHeight);
    }

    function addSymbol(text) {
      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === null) {
          selectionIndex = UImethods.getTextareaSelectionStart();
        }
        array = array.concat(text, array.splice(selectionIndex, array.length));

        selectionIndex += 1;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            array = array.concat(text, array.splice(selectionIndex, array.length));
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
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            if (selectionIndex === array.length) return;
            array.splice(selectionIndex, 1);
            setCursor();
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 30);
        }, 600);
      }
    }

    function backspaceSymbol() {
      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === 0) {
          return;
        }

        array.splice(selectionIndex - 1, 1);
        selectionIndex -= 1;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            if (selectionIndex === 0) {
              return;
            }
            array.splice(selectionIndex - 1, 1);
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
          selectionIndex = UImethods.getTextareaSelectionStart();
        }
        array = array.concat(' ', ' ', ' ', ' ', array.splice(selectionIndex, array.length));

        selectionIndex += 4;
        setCursor();
        allText = array.join('');
        UImethods.changeTextareaInnerHTML(array.join(''));

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            array = array.concat(' ', ' ', ' ', ' ', array.splice(selectionIndex, array.length));
            setCursor();
            selectionIndex += 4;
            allText = array.join('');
            UImethods.changeTextareaInnerHTML(array.join(''));
          }, 50);
        }, 600);
      }
    }

    function changeLanguage() {
      if (ctrlActivate === true && altActivate === true) {
        if (language === 'rus') {
          language = 'eng';
        } else {
          language = 'rus';
        }
        writeKeyboardParametersToLocalStorage();
        initiatorOfReload = 'keyboard';
        document.location.reload();
      }
    }

    function changeSymbolRegister() {
      if (capslockButtonWasReleased !== 'yes') {
        return;
      }
      if (capslockState === 'capslockOn') {
        capslockState = 'capslockOff';
        capslockButtonWasReleased = 'no';
        writeKeyboardParametersToLocalStorage();
        initiatorOfReload = 'keyboard';
        document.location.reload();
      } else if (capslockState === 'capslockOff') {
        capslockState = 'capslockOn';
        capslockButtonWasReleased = 'no';
        writeKeyboardParametersToLocalStorage();
        initiatorOfReload = 'keyboard';
        document.location.reload();
      }
    }

    function activateShift(eventCode) {
      if (shiftState === 'shiftOff') {
        shiftState = 'shiftOn';
        shiftButtonEventCode = eventCode;
        writeKeyboardParametersToLocalStorage();
        initiatorOfReload = 'keyboard';
        document.location.reload();
      }
    }

    function deactivateShift(eventCode) {
      if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
        shiftState = 'shiftOff';
        shiftButtonEventCode = null;
        writeKeyboardParametersToLocalStorage();
        initiatorOfReload = 'keyboard';
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
      if (capslockState === 'capslockOn') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftLeft(button) {
      if (shiftState === 'shiftOn' && shiftButtonEventCode === 'ShiftLeft') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftRight(button) {
      if (shiftState === 'shiftOn' && shiftButtonEventCode === 'ShiftRight') {
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
          if (ctrlActivate === true) {
            ctrlActivate = false;
          } else if (ctrlActivate === false) {
            ctrlActivate = true;
          }
          changeLanguage();
          break;
        case 'ControlRight':
          if (ctrlActivate === true) {
            ctrlActivate = false;
          } else if (ctrlActivate === false) {
            ctrlActivate = true;
          }
          changeLanguage();
          break;
        case 'AltLeft':
          if (altActivate === true) {
            altActivate = false;
          } else if (altActivate === false) {
            altActivate = true;
          }
          changeLanguage();
          break;
        case 'AltRight':
          if (altActivate === true) {
            altActivate = false;
          } else if (altActivate === false) {
            altActivate = true;
          }
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
        const match = eventCode.match(/([\w]{1,20})$/);
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
        ctrlActivate = false;
      }
    }

    function methodForCapsLock(elem) {
      elem.addEventListener('mousedown', () => {
        capslockButtonWasReleased = 'yes';
        changeSymbolRegister();
      });
    }

    function hangEventListenersForMouseButton(elem, callback, symbol) {
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
      hangEventListenersForMouseButton(elem, addSymbol, symbol);
    }

    function methodForBackspace(elem) {
      hangEventListenersForMouseButton(elem, backspaceSymbol);
    }

    function methodForDelete(elem) {
      hangEventListenersForMouseButton(elem, deleteSymbol);
    }

    function setSelectionIndex(value) {
      selectionIndex = value;
    }

    function methodForShiftButton(elem, eventCode) {
      hangEventListenersForMouseButton(elem, activateShift, eventCode);

      elem.addEventListener('mouseup', () => {
        deactivateShift(eventCode);
      });
    }

    function methodForTabButton(elem) {
      hangEventListenersForMouseButton(elem, tab);
    }

    function trackCapslockButtonWasReleased(eventCode) {
      if (eventCode === 'CapsLock') {
        capslockButtonWasReleased = 'yes';
      }
    }

    function methodForWinButton(elem) {
      elem.addEventListener('mousedown', (event) => {
        addAnimationWhenDownMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseup', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseout', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });
    }

    function methodForAltButton(elem) {
      elem.addEventListener('mousedown', (event) => {
        altActivate = true;
        addAnimationWhenDownMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseup', (event) => {
        altActivate = false;
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseout', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });
    }

    function methodForCtrlButton(elem) {
      elem.addEventListener('mousedown', (event) => {
        ctrlActivate = true;
        addAnimationWhenDownMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseup', (event) => {
        ctrlActivate = false;
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseout', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });
    }

    function addClassForFlagElement(elem) {
      if (language === 'eng') {
        elem.classList.remove('russian-federation-flag');
        elem.classList.add('great-britan-flag');
      } else {
        elem.classList.remove('great-britan-flag');
        elem.classList.add('russian-federation-flag');
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
      trackCapslockButtonWasReleased,
      methodForWinButton,
      methodForAltButton,
      methodForCtrlButton,
      addClassForFlagElement,
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
