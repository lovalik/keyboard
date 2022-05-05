function createTemplate(dictionary) {
  return `  <div class="keyboard">
                            <div class="keyboard-screen_wrapper">
                              <textarea class="screen_textarea" spellcheck="true"></textarea>
                            </div>
                            <div class="keyboard-buttons_wrapper">
                              <div class="keyboard__buttons">
                                    <div class="first-row">
                                        <div class="button key_Backquote">${dictionary.backquote}</div>
                                        <div class="button key_Digit1">${dictionary.digit1}</div>
                                        <div class="button key_Digit2">${dictionary.digit2}</div>
                                        <div class="button key_Digit3">${dictionary.digit3}</div>
                                        <div class="button key_Digit4">${dictionary.digit4}</div>
                                        <div class="button key_Digit5">${dictionary.digit5}</div>
                                        <div class="button key_Digit6">${dictionary.digit6}</div>
                                        <div class="button key_Digit7">${dictionary.digit7}</div>
                                        <div class="button key_Digit8">${dictionary.digit8}</div>
                                        <div class="button key_Digit9">${dictionary.digit9}</div>
                                        <div class="button key_Digit0">${dictionary.digit0}</div>
                                        <div class="button key_Minus">${dictionary.minus}</div>
                                        <div class="button key_Equal">${dictionary.equal}</div>
                                        <div class="button key_Backspace">${dictionary.backspace}</div>
                                    </div>
                                    <div class="second-row">
                                        <div class="button key_Tab">${dictionary.tab}</div>
                                        <div class="button key_KeyQ">${dictionary.keyQ}</div>
                                        <div class="button key_KeyW">${dictionary.keyW}</div>
                                        <div class="button key_KeyE">${dictionary.keyE}</div>
                                        <div class="button key_KeyR">${dictionary.keyR}</div>
                                        <div class="button key_KeyT">${dictionary.keyT}</div>
                                        <div class="button key_KeyY">${dictionary.keyY}</div>
                                        <div class="button key_KeyU">${dictionary.keyU}</div>
                                        <div class="button key_KeyI">${dictionary.keyI}</div>
                                        <div class="button key_KeyO">${dictionary.keyO}</div>
                                        <div class="button key_KeyP">${dictionary.keyP}</div>
                                        <div class="button key_BracketLeft">${dictionary.bracketRight}</div>
                                        <div class="button key_BracketRight">${dictionary.bracketLeft}</div>
                                        <div class="button key_Backslash">${dictionary.backslash}</div>
                                        <div class="button key_Delete">${dictionary.delete}</div>
                                    </div>
                                    <div class="third-row">
                                        <div class="button key_CapsLock">${dictionary.capsLock}</div>
                                        <div class="button key_KeyA">${dictionary.keyA}</div>
                                        <div class="button key_KeyS">${dictionary.keyS}</div>
                                        <div class="button key_KeyD">${dictionary.keyD}</div>
                                        <div class="button key_KeyF">${dictionary.keyF}</div>
                                        <div class="button key_KeyG">${dictionary.keyG}</div>
                                        <div class="button key_KeyH">${dictionary.keyH}</div>
                                        <div class="button key_KeyJ">${dictionary.keyJ}</div>
                                        <div class="button key_KeyK">${dictionary.keyK}</div>
                                        <div class="button key_KeyL">${dictionary.keyL}</div>
                                        <div class="button key_Semicolon">${dictionary.semicolon}</div>
                                        <div class="button key_Quote">${dictionary.quote}</div>
                                        <div class="button key_Enter">${dictionary.enter}</div>
                                    </div>
                                    <div class="forth-row">
                                        <div class="button key_ShiftLeft">${dictionary.shiftLeft}</div>
                                        <div class="button key_KeyZ">${dictionary.keyZ}</div>
                                        <div class="button key_KeyX">${dictionary.keyX}</div>
                                        <div class="button key_KeyC">${dictionary.keyC}</div>
                                        <div class="button key_KeyV">${dictionary.keyV}</div>
                                        <div class="button key_KeyB">${dictionary.keyB}</div>
                                        <div class="button key_KeyN">${dictionary.keyN}</div>
                                        <div class="button key_KeyM">${dictionary.keyM}</div>
                                        <div class="button key_Comma">${dictionary.comma}</div>
                                        <div class="button key_Period">${dictionary.period}</div>
                                        <div class="button key_Slash">${dictionary.slash}</div>
                                        <div class="button key_ArrowUp"></div>
                                        <div class="button key_ShiftRight">${dictionary.shiftRight}</div>
                                    </div>
                                    <div class="fifth-row">
                                        <div class="button key_ControlLeft">${dictionary.controlLeft}</div>
                                        <div class="button key_MetaLeft">${dictionary.metaLeft}</div>
                                        <div class="button key_AltLeft">${dictionary.altRight}</div>
                                        <div class="button flag"></div>
                                        <div class="button key_Space"></div>
                                        <div class="button key_AltRight">${dictionary.altLeft}</div>
                                        <div class="button key_ArrowLeft"></div>
                                        <div class="button key_ArrowDown"></div>
                                        <div class="button key_ArrowRight"></div>
                                        <div class="button key_ControlRight">${dictionary.controlRight}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="message">
                                <div class="message_change-language">
                                    <span class="message_os">CTRL + ALT</span>
                                    <span class="message_flag"></span>
                                </div>
                                <div class="message_os-flag"></div>
                            </div>
                        </div>`;
}
export default createTemplate;
