/**
 * Created by KelvinSen on 2016/1/10.
 */
define([], () => {
    return store => next => action => {
        let result = next(action);

        let state = store.getState().crossword,
            itemList = state.get('itemList'),
            sentenceList = state.get('sentenceList');

        let isWin = state.get('initialized') && state.get('blankList').map(item => {
            let itemIndex = item.get('itemIndex'),
                sentenceIndex = item.get('sentenceIndex');
            return (itemIndex || 0 === itemIndex) &&
                   (sentenceIndex || 0 === sentenceIndex) &&
                   itemList.get(itemIndex).get('text') === sentenceList.get(sentenceIndex);
        }).every(value => value) && !state.get('victory');
        isWin && store.dispatch({ type: 'CROSSWORD_VICTORY' });

        return result;
    }
});