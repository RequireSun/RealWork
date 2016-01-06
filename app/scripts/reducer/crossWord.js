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
            default:
                return state;
        }
    }
);