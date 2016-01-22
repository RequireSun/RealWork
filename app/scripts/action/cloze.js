/**
 * Created by KelvinSen on 2016/1/23.
 */
define([], () => ({
    chooseItem: index => ({
        type: 'CHOOSE_ITEM',
        index: index,
    }),
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