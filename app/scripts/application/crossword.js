/**
 * Created by KelvinSen on 2016/1/10.
 */
define([
    'root/store',
    'action/crossword'
], function (store, ACrossword) {
    return () => {
        store.dispatch(ACrossword.setSentence([ '我', '帅', '不', '帅', '?', '帅', '!', '嗷', '嗷', '帅', '啊', '!' ]));

        store.dispatch(ACrossword.setItem([ { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true },
            { text: '帅', availability: true }, { text: '帅', availability: true } ]));

        store.dispatch(ACrossword.setBlank([ { sentenceIndex: 1 }, { sentenceIndex: 3 }, { sentenceIndex: 5 } ]));

        store.dispatch(ACrossword.initialized());
    };
})