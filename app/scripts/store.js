/**
 * Created by KelvinSen on 2016/1/10.
 */
define([
    'redux',
    'reducer/crossword',
    'middleware/crossword',
    'reducer/cloze',
], function (Redux, RCrossword, MCrossword, RCloze) {
    let createStoreWithMiddleware = Redux.applyMiddleware(MCrossword)(Redux.createStore);
    let store = createStoreWithMiddleware(Redux.combineReducers({ crossword: RCrossword, cloze: RCloze }));

    window.store = store;

    return store;
})