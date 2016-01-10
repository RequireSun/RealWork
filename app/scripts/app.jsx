/**
 * Created by KelvinSen on 2016/1/5.
 */
'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        action: '../action',
        view: '../view',
        reducer: '../reducer',
        middleware: '../middleware',
        root: '..'
    }
});

requirejs([
    'react',
    'redux',
    'react-redux',
    'view/box',
    'view/crossword',
    'reducer/crossword',
    'action/crossword',
    'middleware/crossword'
], function (React, Redux, ReactRedux, VBox, VCrossword, RCrossword, ACrossword, MCrossword) {
    let Provider = ReactRedux.Provider;
    let createStoreWithMiddleware = Redux.applyMiddleware(MCrossword)(Redux.createStore)
    let store = createStoreWithMiddleware(Redux.combineReducers({ crossword: RCrossword }));

    window.store = store;

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

    class App extends React.Component {
        render () {
            const { crossword, onChooseItem, onRemoveItem } = this.props;
            return (
                <div>
                    {/*<VBox/>*/}
                    <VCrossword
                        itemList={crossword.get('itemList')}
                        blankList={crossword.get('blankList')}
                        sentenceList={crossword.get('sentenceList')}
                        onChooseItem={onChooseItem}
                        onRemoveItem={onRemoveItem}/>
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            crossword: state.crossword
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            onChooseItem: (index) => dispatch(ACrossword.chooseItem(index)),
            onRemoveItem: (index) => dispatch(ACrossword.removeItem(index))
        };
    }
    let ConnectComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

    React.render(
        <Provider store={store}>
            <ConnectComponent/>
        </Provider>,
        document.getElementById('content'));
});