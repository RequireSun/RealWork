/**
 * Created by kelvinsun on 2016/1/6.
 */
define([], () => {
    return {
        chooseItem: index => {
            return {
                type: 'CROSSWORD_CHOOSE_ITEM',
                index: index
            };
        },
        removeItem: index => {
            return {
                type: 'CROSSWORD_REMOVE_ITEM',
                index: index
            };
        },
        setItem: items => {
            return {
                type: 'CROSSWORD_SET_ITEM',
                items: items
            };
        },
        setSentence: sentence => {
            return {
                type: 'CROSSWORD_SET_SENTENCE',
                sentence: sentence
            };
        },
        setBlank: blank => {
            return {
                type: 'CROSSWORD_SET_BLANK',
                blank: blank
            };
        },
        initialized: () => {
            return {
                type: 'CROSSWORD_INITIALIZED'
            };
        }
    };
});