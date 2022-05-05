import createUI from './ui.js';
import dictionary from './dictionary.js';

function createKeyboard() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);
  // localStorage.clear()

  let language = localStorage.getItem('language');
  let register = localStorage.getItem('register');
  let shiftState = localStorage.getItem('shiftState');
  let shiftButton = localStorage.getItem('shiftButton');
  let allText = localStorage.getItem('allText');
  let textAreaWidth = localStorage.getItem('textAreaWidth');
  let textAreaHeight = localStorage.getItem('textAreaHeight');
  let initiatorOfReload = null;
  let ctrl = false;
  let selectionIndex = null;
  // let trackPressButton = undefined;
  let array = [];

  console.log(`память: ${language}___${register}___${shiftState}___${allText}___( ${textAreaWidth}-X-${textAreaHeight} )`);

  if (language === null) {
    language = 'eng';
  }

  if (register === null) {
    register = 'lower';
    shiftState = 'noShift';
  }

  const dict = dictionary[language][register][shiftState];
  // console.log(JSON.stringify(dict))

  if (allText === null) {
    allText = '';
  }

  if (textAreaWidth === null && textAreaHeight === null) {
    textAreaWidth = 1200;
    textAreaHeight = 100;
  }

  console.log(`после: ${language}___${register}___${shiftState}___${allText}___( ${textAreaWidth}-X-${textAreaHeight} )`);

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        textAreaWidth = Math.round(entry.contentBoxSize[0].inlineSize);
        textAreaHeight = Math.round(entry.contentBoxSize[0].blockSize);
        console.log(` ширина ${textAreaWidth} X высота ${textAreaHeight}`);
      }
    }
  });

  createUI({
    container,
    dict,
    methodsForButtons,
    register,
    allText,
    textAreaWidth,
    textAreaHeight,
    observer,
  });

  localStorage.clear();

  function methodsForButtons() {
    let timeoutIdForAddSymbol;
    let intervalIdForAddSymbol;

    function changeFlag(elem1, elem2) {
      elem1.style.backgroundImage = dict.flag;
      elem2.disabled = true;
      elem2.style.backgroundImage = dict.contrFlag;
    }

    function setCursor(textarea) {
      textarea.focus();
      textarea.style.caretColor = 'transparent';
      setTimeout(() => {
        textarea.style.caretColor = 'black';
        // console.log( `set cursor: будет поставлен в позицию ${ selectionIndex}` );
        textarea.selectionStart = textarea.selectionEnd = selectionIndex;
      });
    }

    function addSymbol(textarea, text) {
      console.log(`таймерID ${timeoutIdForAddSymbol}`);

      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === null) {
          selectionIndex = textarea.selectionStart;
        }

        const tail = array.splice(selectionIndex, array.length);
        array = array.concat(text, tail);

        console.log(`array___${JSON.stringify(array)}`);

        ++selectionIndex;
        setCursor(textarea);

        textarea.innerHTML = array.join('');

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            const tail = array.splice(selectionIndex, array.length);
            array = array.concat(text, tail);
            console.log(`array___${JSON.stringify(array)}`);
            setCursor(textarea);
            ++selectionIndex;
            textarea.innerHTML = array.join('');
          }, 50);
        }, 600);
      } else {

      }
    }

    function deleteSymbol(textarea) {
      if (timeoutIdForAddSymbol === undefined) {
        if (selectionIndex === array.length) return;

        array.splice(selectionIndex, 1);
        console.log(`array___${JSON.stringify(array)}`);
        setCursor(textarea);

        textarea.innerHTML = array.join('');

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            if (selectionIndex === array.length) return;
            array.splice(selectionIndex, 1);
            console.log(`array___${JSON.stringify(array)}`);
            setCursor(textarea);
            textarea.innerHTML = array.join('');
          }, 30);
        }, 600);
      } else {

      }
    }

    function backspaceSymbol(textarea) {
      console.log(`таймерID ${timeoutIdForAddSymbol}`);

      if (timeoutIdForAddSymbol === undefined) {
        switch (selectionIndex) {
          case null:
            selectionIndex = textarea.selectionStart;
            break;
          case 0:
            return;
          default: break;
        }

        console.log(`main.js текущее index${selectionIndex}`);
        const allTextArr = allText.split('');
        allTextArr.splice(selectionIndex - 1, 1);
        allText = allTextArr.join('');
        textarea.innerHTML = allText;
        --selectionIndex;
        console.log(`Индекс${selectionIndex}`);
        if (selectionIndex <= 0) {
          console.log(`backspaceSymbol достигнуто начало Индекс${selectionIndex}`);
          clearTimeout(timeoutIdForAddSymbol);
          clearInterval(intervalIdForAddSymbol);
          timeoutIdForAddSymbol = undefined;
          intervalIdForAddSymbol = undefined;
          return;
        }

        timeoutIdForAddSymbol = window.setTimeout(() => {
          intervalIdForAddSymbol = window.setInterval(() => {
            console.log(`++++++++++++++++++++++++${selectionIndex}`);
            if (selectionIndex <= 0) {
              clearTimeout(timeoutIdForAddSymbol);
              clearInterval(intervalIdForAddSymbol);
              timeoutIdForAddSymbol = undefined;
              intervalIdForAddSymbol = undefined;
              console.log(`отказ, достигнуто начало${timeoutIdForAddSymbol}`);
              console.log(`отказ, достигнуто начало${intervalIdForAddSymbol}`);
              return;
            }
            console.log(`main.js запущен setInterval текущее index${selectionIndex}`);
            const allTextArr = allText.split('');
            allTextArr.splice(selectionIndex - 1, 1);
            setCursor(textarea);
            selectionIndex--;
            allText = allTextArr.join('');
            textarea.innerHTML = allText;
            console.log(`backspace 1 символ__alltext ${allText}`);
          }, 100);
        }, 600);
      } else {

      }
    }

    function changeLanguage() {
      if (language === 'rus') {
        language = 'eng';
      } else {
        language = 'rus';
      }
      writeKeyboardParametersToLocalStorage();
      initiatorOfReload;
      document.location.reload();
    }

    function changeSymbolRegister() {
      (register === 'lower') ? register = 'upper' : register = 'lower';

      writeKeyboardParametersToLocalStorage();
      initiatorOfReload = 'keyboard';
      document.location.reload();
    }

    function activateShift(eventCode) {
      shiftState = 'shift';
      shiftButton = eventCode;
      writeKeyboardParametersToLocalStorage();
      document.location.reload();
    }

    function holdShift() {
      if (shiftState === 'shift') {
        return true;
      }
    }

    function writeKeyboardParametersToLocalStorage() {
      localStorage.setItem('language', language);
      localStorage.setItem('register', register);
      localStorage.setItem('shiftState', shiftState);
      localStorage.setItem('shiftButton', shiftButton);
      localStorage.setItem('allText', allText);
      localStorage.setItem('textAreaWidth', textAreaWidth);
      localStorage.setItem('textAreaHeight', textAreaHeight);
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
      if (register === 'upper') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftLeft(button) {
      if (shiftState === 'shift' && shiftButton === 'ShiftLeft') {
        button.classList.add('animation');
      }
    }

    function highlightButtonShiftRight(button) {
      if (shiftState === 'shift' && shiftButton === 'ShiftRight') {
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

    function methodsForControlKeys(eventCode, textarea) {
      switch (eventCode) {
        case 'Delete':
          deleteSymbol(textarea);
          break;
        case 'Space':
          addSymbol(textarea, dict.Space);
          break;
        case 'Backspace':
          backspaceSymbol(textarea);
          break;
        case 'CapsLock':
          changeSymbolRegister();
          break;
        case 'ShiftLeft':
          if (holdShift()) return;
          activateShift(eventCode);
          break;
        case 'ShiftRight':
          if (holdShift()) return;
          activateShift(eventCode);
          break;
        case 'ControlLeft':
          ctrl = true;
          break;
        case 'ControlRight':
          ctrl = true;
          break;
        case 'AltLeft':
          if (ctrl === true) {
            changeLanguage();
          }
          break;
        case 'AltRight':
          if (ctrl === true) {
            changeLanguage();
          }
          break;
        case 'Enter':
          addSymbol(textarea, '\n');
          break;
        case 'Tab':
          // addSymbol( textarea, `&nbsp&nbsp&nbsp&nbsp` );
          break;
        default: break;
      }
    }

    function addSymbolToTextareaByKeyboard(eventCode, textarea) {
      const regexp = new RegExp(/([\w]{1,10})$/);

      if (!checkIsControlButton(eventCode)) {
        const match = eventCode.match(regexp);
        console.log(`совпадение класса ${match[1]}__словарь${dict[match[1]]}`);

        addSymbol(textarea, dict[match[1]]);
      }
    }

    function addClassForAnimation(event, buttonsCollection) {
      for (const button of buttonsCollection) {
        if (button.classList.contains(`key_${event}`)) {
          button.classList.add('animation');
        }
      }
    }

    function removeClassForAnimation(eventCode, buttonsCollection) {
      if (eventCode !== 'CapsLock') {
        for (const button of buttonsCollection) {
          if (button.classList.contains(`key_${eventCode}`)) {
            button.classList.remove('animation');
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

    function deactivateShift(eventCode) {
      if (eventCode === 'ShiftLeft' || eventCode === 'ShiftRight') {
        shiftState = 'noShift';
        shiftButton = null;
        writeKeyboardParametersToLocalStorage();
        document.location.reload();
      }
    }

    function methodForCapsLock(elem) {
      elem.addEventListener('mousedown', () => {
        changeSymbolRegister();
      });
    }

    function hangEventListenersForMouseAlpahumericButton(elem, callback, textarea, symbol) {
      elem.addEventListener('mousedown', (event) => {
        // preventSimultaneousPressing();
        event.preventDefault();
        setCursor(textarea);
        callback(textarea, symbol);
        addAnimationWhenDownMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseup', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });

      elem.addEventListener('mouseout', (event) => {
        removeAnimationWhenUpMouseButton(event.currentTarget);
      });
    }

    function methodForAlphanumericButton(textarea, elem, symbol) {
      hangEventListenersForMouseAlpahumericButton(elem, addSymbol, textarea, symbol);
    }

    function methodForBackspace(textarea, elem) {
      hangEventListenersForMouseAlpahumericButton(elem, backspaceSymbol, textarea);
    }

    function methodForDelete(textarea, elem) {
      hangEventListenersForMouseAlpahumericButton(elem, deleteSymbol, textarea);
    }

    // function hangEventListenersForMouseControlButton( elem, callback ){
    //     elem.addEventListener( "mousedown", ( event ) => {
    //         callback();
    //         addAnimationWhenDownMouseButton( event.currentTarget );
    //     } );

    //     elem.addEventListener( "mouseup", () => {
    //         removeAnimationWhenUpMouseButton( event.currentTarget );
    //     } );

    //     elem.addEventListener( "mouseout", () => {
    //        removeAnimationWhenUpMouseButton( event.currentTarget );
    //     } );
    // }

    function setSelectionIndex(value) {
      selectionIndex = value;
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
      changeFlag,
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
