function createTemplate(dictionary) {
  return `  <div class='keyboard'>
                            <div class='keyboard-screen_wrapper'>
                              <textarea class='screen_textarea' spellcheck='true'></textarea>
                            </div>
                            <div class='keyboard-buttons_wrapper'>
                              <div class='keyboard__buttons'>
                                    <div class='first-row'>
                                        <div class='button key_backquote'>${dictionary.backquote}</div>
                                        <div class='button key_digit-1'>${dictionary.digit1}</div>
                                        <div class='button key_digit-2'>${dictionary.digit2}</div>
                                        <div class='button key_digit-3'>${dictionary.digit3}</div>
                                        <div class='button key_digit-4'>${dictionary.digit4}</div>
                                        <div class='button key_digit-5'>${dictionary.digit5}</div>
                                        <div class='button key_digit-6'>${dictionary.digit6}</div>
                                        <div class='button key_digit-7'>${dictionary.digit7}</div>
                                        <div class='button key_digit-8'>${dictionary.digit8}</div>
                                        <div class='button key_digit-9'>${dictionary.digit9}</div>
                                        <div class='button key_digit-0'>${dictionary.digit0}</div>
                                        <div class='button key_minus'>${dictionary.minus}</div>
                                        <div class='button key_equal'>${dictionary.equal}</div>
                                        <div class='button key_backspace'>${dictionary.backspace}</div>
                                    </div>
                                    <div class='second-row'>
                                        <div class='button key_tab'>${dictionary.tab}</div>
                                        <div class='button key_key-Q'>${dictionary.keyQ}</div>
                                        <div class='button key_key-W'>${dictionary.keyW}</div>
                                        <div class='button key_key-E'>${dictionary.keyE}</div>
                                        <div class='button key_key-R'>${dictionary.keyR}</div>
                                        <div class='button key_key-T'>${dictionary.keyT}</div>
                                        <div class='button key_key-Y'>${dictionary.keyY}</div>
                                        <div class='button key_key-U'>${dictionary.keyU}</div>
                                        <div class='button key_key-I'>${dictionary.keyI}</div>
                                        <div class='button key_key-O'>${dictionary.keyO}</div>
                                        <div class='button key_key-P'>${dictionary.keyP}</div>
                                        <div class='button key_bracket-left'>${dictionary.bracketRight}</div>
                                        <div class='button key_bracket-right'>${dictionary.bracketLeft}</div>
                                        <div class='button key_backslash'>${dictionary.backslash}</div>
                                        <div class='button key_delete'>${dictionary.delete}</div>
                                    </div>
                                    <div class='third-row'>
                                        <div class='button key_capslock'>${dictionary.capsLock}</div>
                                        <div class='button key_key-A'>${dictionary.keyA}</div>
                                        <div class='button key_key-S'>${dictionary.keyS}</div>
                                        <div class='button key_key-D'>${dictionary.keyD}</div>
                                        <div class='button key_key-F'>${dictionary.keyF}</div>
                                        <div class='button key_key-G'>${dictionary.keyG}</div>
                                        <div class='button key_key-H'>${dictionary.keyH}</div>
                                        <div class='button key_key-J'>${dictionary.keyJ}</div>
                                        <div class='button key_key-K'>${dictionary.keyK}</div>
                                        <div class='button key_key-L'>${dictionary.keyL}</div>
                                        <div class='button key_semicolon'>${dictionary.semicolon}</div>
                                        <div class='button key_quote'>${dictionary.quote}</div>
                                        <div class='button key_enter'>${dictionary.enter}</div>
                                    </div>
                                    <div class='forth-row'>
                                        <div class='button key_shift-left'>${dictionary.shiftLeft}</div>
                                        <div class='button key_key-Z'>${dictionary.keyZ}</div>
                                        <div class='button key_key-X'>${dictionary.keyX}</div>
                                        <div class='button key_key-C'>${dictionary.keyC}</div>
                                        <div class='button key_key-V'>${dictionary.keyV}</div>
                                        <div class='button key_key-B'>${dictionary.keyB}</div>
                                        <div class='button key_key-N'>${dictionary.keyN}</div>
                                        <div class='button key_key-M'>${dictionary.keyM}</div>
                                        <div class='button key_comma'>${dictionary.comma}</div>
                                        <div class='button key_period'>${dictionary.period}</div>
                                        <div class='button key_slash'>${dictionary.slash}</div>
                                        <div class='button key_arrow-up'></div>
                                        <div class='button key_shift-right'>${dictionary.shiftRight}</div>
                                    </div>
                                    <div class='fifth-row'>
                                        <div class='button key_control-left'>${dictionary.controlLeft}</div>
                                        <div class='button key_meta-left'>${dictionary.metaLeft}</div>
                                        <div class='button key_alt-left'>${dictionary.altRight}</div>
                                        <div class='button flag'></div>
                                        <div class='button key_space'></div>
                                        <div class='button key_alt-right'>${dictionary.altLeft}</div>
                                        <div class='button key_arrow-left'></div>
                                        <div class='button key_arrow-down'></div>
                                        <div class='button key_arrow-right'></div>
                                        <div class='button key_control-right'>${dictionary.controlRight}</div>
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
                        </div>`;
}
export default createTemplate;
