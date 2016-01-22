/**
 * Created by KelvinSen on 2016/1/23.
 */
define([
    'root/store',
    'action/reorder'
], (store, AReorder) => () => {
    store.dispatch(AReorder.setSentence([
        { sentence: '我帅故我在3', correctIndex: 3 },
        { sentence: '我帅故我在4', correctIndex: 4 },
        { sentence: '我帅故我在2', correctIndex: 2 },
        { sentence: '我帅故我在0', correctIndex: 0 },
        { sentence: '我帅故我在1', correctIndex: 1 },
    ]));

    store.dispatch(AReorder.initialized());
});