/**
 * Created by KelvinSen on 2016/1/23.
 */
define([], () => ({
    setSentence: sentence => ({
        type: 'SET_SENTENCE',
        sentence: sentence,
    }),
    setBlank: blank => ({
        type: 'SET_BLANK',
        blank: blank,
    }),
    initialized: () => ({
        type: 'INITIALIZED',
    }),
}));