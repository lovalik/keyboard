function createTemplate(dictionary) {
  return `  <div class='keyboard'>
                            <div class='keyboard-screen_wrapper'>
                              <textarea class='screen_textarea' spellcheck='true'></textarea>
                            </div>
                            <div class='keyboard-buttons_wrapper'>
                              <div class='keyboard__buttons'>
                                    <div class='first-row'>
                                        <div class='button key_backquote'>${dictionary.Backquote}</div>
                                        <div class='button key_digit-1'>${dictionary.Digit1}</div>
                                        <div class='button key_digit-2'>${dictionary.Digit2}</div>
                                        <div class='button key_digit-3'>${dictionary.Digit3}</div>
                                        <div class='button key_digit-4'>${dictionary.Digit4}</div>
                                        <div class='button key_digit-5'>${dictionary.Digit5}</div>
                                        <div class='button key_digit-6'>${dictionary.Digit6}</div>
                                        <div class='button key_digit-7'>${dictionary.Digit7}</div>
                                        <div class='button key_digit-8'>${dictionary.Digit8}</div>
                                        <div class='button key_digit-9'>${dictionary.Digit9}</div>
                                        <div class='button key_digit-0'>${dictionary.Digit0}</div>
                                        <div class='button key_minus'>${dictionary.Minus}</div>
                                        <div class='button key_equal'>${dictionary.Equal}</div>
                                        <div class='button key_backspace'>${dictionary.Backspace}</div>
                                    </div>
                                    <div class='second-row'>
                                        <div class='button key_tab'>${dictionary.Tab}</div>
                                        <div class='button key_key-Q'>${dictionary.KeyQ}</div>
                                        <div class='button key_key-W'>${dictionary.KeyW}</div>
                                        <div class='button key_key-E'>${dictionary.KeyE}</div>
                                        <div class='button key_key-R'>${dictionary.KeyR}</div>
                                        <div class='button key_key-T'>${dictionary.KeyT}</div>
                                        <div class='button key_key-Y'>${dictionary.KeyY}</div>
                                        <div class='button key_key-U'>${dictionary.KeyU}</div>
                                        <div class='button key_key-I'>${dictionary.KeyI}</div>
                                        <div class='button key_key-O'>${dictionary.KeyO}</div>
                                        <div class='button key_key-P'>${dictionary.KeyP}</div>
                                        <div class='button key_bracket-left'>${dictionary.BracketRight}</div>
                                        <div class='button key_bracket-right'>${dictionary.BracketLeft}</div>
                                        <div class='button key_backslash'>${dictionary.Backslash}</div>
                                        <div class='button key_delete'>${dictionary.Delete}</div>
                                    </div>
                                    <div class='third-row'>
                                        <div class='button key_capslock'>${dictionary.CapsLock}</div>
                                        <div class='button key_key-A'>${dictionary.KeyA}</div>
                                        <div class='button key_key-S'>${dictionary.KeyS}</div>
                                        <div class='button key_key-D'>${dictionary.KeyD}</div>
                                        <div class='button key_key-F'>${dictionary.KeyF}</div>
                                        <div class='button key_key-G'>${dictionary.KeyG}</div>
                                        <div class='button key_key-H'>${dictionary.KeyH}</div>
                                        <div class='button key_key-J'>${dictionary.KeyJ}</div>
                                        <div class='button key_key-K'>${dictionary.KeyK}</div>
                                        <div class='button key_key-L'>${dictionary.KeyL}</div>
                                        <div class='button key_semicolon'>${dictionary.Semicolon}</div>
                                        <div class='button key_quote'>${dictionary.Quote}</div>
                                        <div class='button key_enter'>${dictionary.Enter}</div>
                                    </div>
                                    <div class='forth-row'>
                                        <div class='button key_shift-left'>${dictionary.ShiftLeft}</div>
                                        <div class='button key_key-Z'>${dictionary.KeyZ}</div>
                                        <div class='button key_key-X'>${dictionary.KeyX}</div>
                                        <div class='button key_key-C'>${dictionary.KeyC}</div>
                                        <div class='button key_key-V'>${dictionary.KeyV}</div>
                                        <div class='button key_key-B'>${dictionary.KeyB}</div>
                                        <div class='button key_key-N'>${dictionary.KeyN}</div>
                                        <div class='button key_key-M'>${dictionary.KeyM}</div>
                                        <div class='button key_comma'>${dictionary.Comma}</div>
                                        <div class='button key_period'>${dictionary.Period}</div>
                                        <div class='button key_slash'>${dictionary.Slash}</div>
                                        <div class='button key_arrow-up'></div>
                                        <div class='button key_shift-right'>${dictionary.ShiftRight}</div>
                                    </div>
                                    <div class='fifth-row'>
                                        <div class='button key_control-left'>${dictionary.ControlLeft}</div>
                                        <div class='button key_meta-left'>${dictionary.MetaLeft}</div>
                                        <div class='button key_alt-left'>${dictionary.AltRight}</div>
                                        <div class='button flag'></div>
                                        <div class='button key_space'></div>
                                        <div class='button key_alt-right'>${dictionary.AltLeft}</div>
                                        <div class='button key_arrow-left'></div>
                                        <div class='button key_arrow-down'></div>
                                        <div class='button key_arrow-right'></div>
                                        <div class='button key_control-right'>${dictionary.ControlRight}</div>
                                    </div>
                                </div>
                            </div>
                            <div class='message'>
                                <div class='message_change-language'>
                                    <span class='message_os'>CTRL + ALT</span>
                                    <span class='message_flag'></span>
                                </div>
                                <div class='message_windows10-logo'></div>
                            </div>
                            <div class="ecmascript6-features">
                                <p>ECMAscript 6 features:</p>
                                <ul class="ecmascript6-features_ul">
                                    <li>использование стрелочных функций в файле-модуле: main.js</li>
                                    <li>объявление переменных через let и const файлах-модулях: main.js, ui.js</li>
                                    <li>использование модулей: все файлы папки scripts являются модулями т.е. экспортируются или импортируются в другие модули</li>
                                    <li>использование классов: в модуле ui.js объявлен class UImethods, методы этого класса используются в main.js</li>
                                </ul>
                            </div>
                        </div>`;
}
export default createTemplate;
