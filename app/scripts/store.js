/**
 * Created by KelvinSen on 2016/1/10.
 */
define([
    'redux',
    'reducer/crossword',
    'middleware/crossword',
    'reducer/cloze',
    'middleware/cloze',
    'reducer/reorder',
    'middleware/reorder',
], function (Redux, RCrossword, MCrossword, RCloze, MCloze, RReorder, MReorder) {
    let createStoreWithMiddleware = Redux.applyMiddleware(MReorder, MCloze, MCrossword)(Redux.createStore);
    let store = createStoreWithMiddleware(Redux.combineReducers({ reorder: RReorder, cloze: RCloze, crossword: RCrossword }));

    window.store = store;

    return store;
})