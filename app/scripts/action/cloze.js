/**
 * Created by KelvinSen on 2016/1/23.
 */
define([], () => ({
    chooseItem: index => ({
        type: 'CLOZE_CHOOSE_ITEM',
        index: index,
    }),
    setSentence: sentence => ({
        type: 'CLOZE_SET_SENTENCE',
        sentence: sentence,
    }),
    setBlank: blank => ({
        type: 'CLOZE_SET_BLANK',
        blank: blank,
    }),
    initialized: () => ({
        type: 'CLOZE_INITIALIZED',
    }),
}));