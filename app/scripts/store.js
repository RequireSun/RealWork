/**
 * Created by KelvinSen on 2016/1/10.
 */
define([
    'redux',
    'reducer/crossword',
    'middleware/crossword',
], function (Redux, RCrossword, MCrossword) {
    let createStoreWithMiddleware = Redux.applyMiddleware(MCrossword)(Redux.createStore);
    let store = createStoreWithMiddleware(Redux.combineReducers({ crossword: RCrossword }));

    window.store = store;

    return store;
})