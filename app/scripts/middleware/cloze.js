/**
 * Created by KelvinSen on 2016/1/23.
 */
define([], () =>
    store => next => action => {
        let result = next(action);

        let state = store.getState().cloze,
            //blankList = state.get('blankList'),
            sentenceList = state.get('sentenceList');

        let isWin = state.get('initialized') && state.get('blankList').map(item => {
                let choiceIndex = item.get('choiceIndex') || 0,
                    sentenceIndex = item.get('sentenceIndex');
                return (sentenceIndex || 0 === sentenceIndex) &&
                    item.get('items').get(choiceIndex) === sentenceList.get(sentenceIndex);
            }).every(value => value);
        //isWin && store.dispatch({ type: 'VICTORY' });
        //console.log(isWin);

        return result;
    }
);