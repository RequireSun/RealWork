/**
 * Created by KelvinSen on 2016/1/23.
 */
define([
    'root/store',
    'action/cloze'
], (store, ACloze) => () => {
    store.dispatch(ACloze.setSentence([ '我', '帅', '不', '帅', '?', '帅', '!', '嗷', '嗷', '帅', '啊', '!' ]));

    store.dispatch(ACloze.setBlank([
        { sentenceIndex: 1, items: ['美', '俊', '帅', '靓'] },
        { sentenceIndex: 3, items: ['美', '俊', '帅', '靓'] },
        { sentenceIndex: 5, items: ['美', '俊', '帅', '靓'] }
    ]));

    store.dispatch(ACloze.initialized());
});