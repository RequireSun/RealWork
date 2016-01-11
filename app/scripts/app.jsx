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
        application: '../application',
        root: '..'
    }
});

requirejs([
    'react',
    'redux',
    'react-redux',
    'root/store',
    'application/crossword',
    'view/box',
    'view/crossword',
    'action/crossword',
    'view/cloze',
], function (
    React,
    Redux,
    ReactRedux,
    store,
    AppCrossword,
    VBox,
    VCrossword,
    ACrossword,
    VCloze
) {
    let Provider = ReactRedux.Provider;

    AppCrossword();

    class App extends React.Component {
        render () {
            const { crossword, onChooseItem, onRemoveItem } = this.props;
            return (
                <div>
                    {/*<VBox/>*/}
                    {/*<VCrossword
                        itemList={crossword.get('itemList')}
                        blankList={crossword.get('blankList')}
                        sentenceList={crossword.get('sentenceList')}
                        onChooseItem={onChooseItem}
                        onRemoveItem={onRemoveItem}/>*/}
                    <VCloze/>
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