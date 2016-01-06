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
    'action/crossword'
], function (React, Redux, ReactRedux, VBox, VCrossword, RCrossword, ACrossword) {
    let Provider = ReactRedux.Provider;
    let store = Redux.createStore(Redux.combineReducers({ crossword: RCrossword }));

    window.store = store;

    store.dispatch(ACrossword.setSentence([ '我', '帅', '不', '帅', '?', '帅', '!', '嗷', '嗷', '帅', '啊', '!' ]));

    store.dispatch(ACrossword.setItem([ '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅' ]));

    store.dispatch(ACrossword.setBlank([ { sentenceIndex: 1 }, { sentenceIndex: 3 }, { sentenceIndex: 5 } ]));

    class App extends React.Component {
        render () {
            const { crossword, onChooseItem } = this.props;
            return (
                <div>
                    {/*<VBox/>*/}
                    <VCrossword
                        itemList={crossword.get('itemList')}
                        blankList={crossword.get('blankList')}
                        sentenceList={crossword.get('sentenceList')}
                        onChooseItem={onChooseItem}/>
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
            onChooseItem: () => dispatch(ACrossword.chooseItem())
        };
    }
    let ConnectComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

    React.render(
        <Provider store={store}>
            <ConnectComponent/>
        </Provider>,
        document.getElementById('content'));
});