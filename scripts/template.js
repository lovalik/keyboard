function createTemplate(dictionary) {
  return `  <div class="keyboard">
                            <div class="keyboard-screen_wrapper">
                              <textarea class="screen_textarea" spellcheck="true"></textarea>
                            </div>
                            <div class="keyboard-buttons_wrapper">
                              <div class="keyboard__buttons">
                                    <div class="first-row">
                                        <div class="button key_Backquote">${dictionary.Backquote}</div>
                                        <div class="button key_Digit1">${dictionary.Digit1}</div>
                                        <div class="button key_Digit2">${dictionary.Digit2}</div>
                                        <div class="button key_Digit3">${dictionary.Digit3}</div>
                                        <div class="button key_Digit4">${dictionary.Digit4}</div>
                                        <div class="button key_Digit5">${dictionary.Digit5}</div>
                                        <div class="button key_Digit6">${dictionary.Digit6}</div>
                                        <div class="button key_Digit7">${dictionary.Digit7}</div>
                                        <div class="button key_Digit8">${dictionary.Digit8}</div>
                                        <div class="button key_Digit9">${dictionary.Digit9}</div>
                                        <div class="button key_Digit0">${dictionary.Digit0}</div>
                                        <div class="button key_Minus">${dictionary.Minus}</div>
                                        <div class="button key_Equal">${dictionary.Equal}</div>
                                        <div class="button key_Backspace">${dictionary.Backspace}</div>
                                    </div>
                                    <div class="second-row">
                                        <div class="button key_Tab">${dictionary.Tab}</div>
                                        <div class="button key_KeyQ">${dictionary.KeyQ}</div>
                                        <div class="button key_KeyW">${dictionary.KeyW}</div>
                                        <div class="button key_KeyE">${dictionary.KeyE}</div>
                                        <div class="button key_KeyR">${dictionary.KeyR}</div>
                                        <div class="button key_KeyT">${dictionary.KeyT}</div>
                                        <div class="button key_KeyY">${dictionary.KeyY}</div>
                                        <div class="button key_KeyU">${dictionary.KeyU}</div>
                                        <div class="button key_KeyI">${dictionary.KeyI}</div>
                                        <div class="button key_KeyO">${dictionary.KeyO}</div>
                                        <div class="button key_KeyP">${dictionary.KeyP}</div>
                                        <div class="button key_BracketLeft">${dictionary.BracketRight}</div>
                                        <div class="button key_BracketRight">${dictionary.BracketLeft}</div>
                                        <div class="button key_Backslash">${dictionary.Backslash}</div>
                                        <div class="button key_Delete">${dictionary.Delete}</div>
                                    </div>
                                    <div class="third-row">
                                        <div class="button key_CapsLock">${dictionary.CapsLock}</div>
                                        <div class="button key_KeyA">${dictionary.KeyA}</div>
                                        <div class="button key_KeyS">${dictionary.KeyS}</div>
                                        <div class="button key_KeyD">${dictionary.KeyD}</div>
                                        <div class="button key_KeyF">${dictionary.KeyF}</div>
                                        <div class="button key_KeyG">${dictionary.KeyG}</div>
                                        <div class="button key_KeyH">${dictionary.KeyH}</div>
                                        <div class="button key_KeyJ">${dictionary.KeyJ}</div>
                                        <div class="button key_KeyK">${dictionary.KeyK}</div>
                                        <div class="button key_KeyL">${dictionary.KeyL}</div>
                                        <div class="button key_Semicolon">${dictionary.Semicolon}</div>
                                        <div class="button key_Quote">${dictionary.Quote}</div>
                                        <div class="button key_Enter">${dictionary.Enter}</div>
                                    </div>
                                    <div class="forth-row">
                                        <div class="button key_ShiftLeft">${dictionary.ShiftLeft}</div>
                                        <div class="button key_KeyZ">${dictionary.KeyZ}</div>
                                        <div class="button key_KeyX">${dictionary.KeyX}</div>
                                        <div class="button key_KeyC">${dictionary.KeyC}</div>
                                        <div class="button key_KeyV">${dictionary.KeyV}</div>
                                        <div class="button key_KeyB">${dictionary.KeyB}</div>
                                        <div class="button key_KeyN">${dictionary.KeyN}</div>
                                        <div class="button key_KeyM">${dictionary.KeyM}</div>
                                        <div class="button key_Comma">${dictionary.Comma}</div>
                                        <div class="button key_Period">${dictionary.Period}</div>
                                        <div class="button key_Slash">${dictionary.Slash}</div>
                                        <div class="button key_ArrowUp"></div>
                                        <div class="button key_ShiftRight">${dictionary.ShiftRight}</div>
                                    </div>
                                    <div class="fifth-row">
                                        <div class="button key_ControlLeft">${dictionary.ControlLeft}</div>
                                        <div class="button key_MetaLeft">${dictionary.MetaLeft}</div>
                                        <div class="button key_AltLeft">${dictionary.AltRight}</div>
                                        <div class="button flag"></div>
                                        <div class="button key_Space"></div>
                                        <div class="button key_AltRight">${dictionary.AltLeft}</div>
                                        <div class="button key_ArrowLeft"></div>
                                        <div class="button key_ArrowDown"></div>
                                        <div class="button key_ArrowRight"></div>
                                        <div class="button key_ControlRight">${dictionary.ControlRight}</div>
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
