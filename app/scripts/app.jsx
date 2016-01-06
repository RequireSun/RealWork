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
    'view/crossWord',
    'reducer/crossWord',
    'action/crossWord'
], function (React, Redux, ReactRedux, VBox, VCrossWord, RCrossWord, ACrossWord) {
    let Provider = ReactRedux.Provider;
    let store = Redux.createStore(Redux.combineReducers({ crossWord: RCrossWord }));

    window.store = store;

    store.dispatch(ACrossWord.setItem([ '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅',
                                        '帅', '帅', '帅', '帅', '帅' ]));

    class App extends React.Component {
        render () {
            const { crossWord, onChooseItem } = this.props;
            return (
                <div>
                    {/*<VBox/>*/}
                    <VCrossWord
                        itemList={crossWord.get('itemList')}
                        blankList={crossWord.get('blankList')}
                        sentenceList={crossWord.get('sentenceList')}
                        onChooseItem={onChooseItem}/>
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            crossWord: state.crossWord
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            onChooseItem: () => dispatch(ACrossWord.chooseItem())
        };
    }
    let ConnectComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

    React.render(
        <Provider store={store}>
            <ConnectComponent/>
        </Provider>,
        document.getElementById('content'));
});