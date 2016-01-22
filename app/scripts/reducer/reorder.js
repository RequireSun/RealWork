/**
 * Created by KelvinSen on 2016/1/23.
 */
define(['immutable'], Immutable =>
    (state = Immutable.Map({
        sentenceList: Immutable.List(),
        choiceItem: undefined,
    }), action) => {
        switch (action.type) {
            case 'REORDER_CHOOSE_ITEM':
                let choiceItem = state.get('choiceItem');
                if (!choiceItem && 0 !== choiceItem) {
                    return state.update('choiceItem', () => action.index);
                } else if (choiceItem === action.index) {
                    return state.delete('choiceItem');
                } else {
                    return state.update('sentenceList', value => {
                        let lastSelect = value.get(state.get('choiceItem'));
                        return value.set(state.get('choiceItem'), value.get(action.index)).set(action.index, lastSelect);
                    }).delete('choiceItem');
                }
                return state;
            case 'REORDER_SET_SENTENCE':
                return state.update('sentenceList', () =>
                    Immutable.fromJS(action.sentence));
            case 'REORDER_INITIALIZED':
                return state.update('initialized', () => true);
            default:
                return state;
        }
    })