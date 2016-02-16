/**
 * Created by KelvinSen on 2016/1/23.
 */
define(['immutable'], Immutable =>
    store => next => action => {
        let result = next(action);

        let state = store.getState().reorder,
            sentenceList = state.get('sentenceList');

        let isWin = state.get('initialized') && Immutable.is(sentenceList.sort((valueA, valueB) =>
            valueA.get('correctIndex') - valueB.get('correctIndex')
        ), sentenceList) && !state.get('victory');
        isWin && store.dispatch({ type: 'REORDER_VICTORY' });

        return result;
    }
);