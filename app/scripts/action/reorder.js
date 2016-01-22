/**
 * Created by KelvinSen on 2016/1/23.
 */
define([], () => ({
    chooseItem: index => ({
        type: 'REORDER_CHOOSE_ITEM',
        index: index,
    }),
    setSentence: sentence => ({
        type: 'REORDER_SET_SENTENCE',
        sentence: sentence,
    }),
    initialized: () => ({
        type: 'REORDER_INITIALIZED',
    }),
}));