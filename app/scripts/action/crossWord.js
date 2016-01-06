/**
 * Created by kelvinsun on 2016/1/6.
 */
define([], () => {
    return {
        chooseItem: index => {
            return {
                type: 'CHOOSE_ITEM',
                index: index
            };
        },
        setItem: items => {
            return {
                type: 'SET_ITEM',
                items: items
            };
        },
        setSentence: sentence => {
            return {
                type: 'SET_SENTENCE',
                sentence: sentence
            };
        },
        setBlank: blank => {
            return {
                type: 'SET_BLANK',
                blank: blank
            };
        }
    };
});