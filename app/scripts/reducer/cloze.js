/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['immutable'], Immutable =>
    (state = Immutable.Map({
        sentenceList: Immutable.List(),
        blankList: Immutable.List(),
        initialized: false,
        victory: false,
    }), action) => {
        switch (action.type) {
            case 'CLOZE_CHOOSE_ITEM':
                return state.update('blankList', value => {
                    let tarBlankIndex = value.findIndex(value => action.index === value.get('sentenceIndex'));
                    if (-1 !== tarBlankIndex) {
                        let tarBlank = value.get(tarBlankIndex);
                        return value.set(tarBlankIndex, tarBlank.update('choiceIndex', value =>
                            ((value || 0) + 1) % tarBlank.get('items').size));
                    } else {
                        return value;
                    }
                });
            case 'CLOZE_SET_SENTENCE':
                return state.update('sentenceList', () =>
                    Immutable.List(action.sentence));
            case 'CLOZE_SET_BLANK':
                return state.update('blankList', () =>
                    Immutable.fromJS(action.blank));
            case 'CLOZE_INITIALIZED':
                return state.update('initialized', () => true);
            case 'CLOZE_VICTORY':
                return state.update('victory', () => true);
            default:
                return state;
        }
    }
);