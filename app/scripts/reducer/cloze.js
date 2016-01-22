/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['immutable'], Immutable =>
    (state = Immutable.Map({
        list: Immutable.List()
    }), action) => {
        switch (action.type) {
            case 'SET_SENTENCE':
                return state.update('sentenceList', () =>
                    Immutable.List(action.sentence));
            case 'SET_BLANK':
                return state.update('blankList', () =>
                    Immutable.fromJS(action.blank));
            case 'INITIALIZED':
                return state.update('initialized', () => true);
            default:
                return state;
        }
    }
);