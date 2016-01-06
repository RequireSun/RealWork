define(['immutable'], Immutable =>
    (state = Immutable.Map({
        itemList: Immutable.List(),
        blankList: Immutable.List(),
        sentenceList: Immutable.List()
    }), action) => {
        switch (action.type) {
            case 'CHOOSE_ITEM':
                return state.update('chosenList', l =>
                    l.get(action.index) ?
                        l.delete(action.index) :
                        l.set(action.index, true)
                );
            case 'SET_ITEM':
                return state.update('itemList', () =>
                    Immutable.List(action.items));
            case 'SET_SENTENCE':
                return state.update('sentenceList', () =>
                    Immutable.List(action.sentence));
            case 'SET_BLANK':
                return state.update('blankList', () =>
                    Immutable.fromJS(action.blank));
            default:
                return state;
        }
    }
);