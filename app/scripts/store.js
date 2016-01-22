/**
 * Created by KelvinSen on 2016/1/10.
 */
define([
    'redux',
    'reducer/crossword',
    'middleware/crossword',
    'reducer/cloze',
    'middleware/cloze',
], function (Redux, RCrossword, MCrossword, RCloze, MCloze) {
    let createStoreWithMiddleware = Redux.applyMiddleware(MCrossword, MCloze)(Redux.createStore);
    let store = createStoreWithMiddleware(Redux.combineReducers({ crossword: RCrossword, cloze: RCloze }));

    window.store = store;

    return store;
})