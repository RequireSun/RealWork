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
    'react-dom',
    'redux',
    'react-redux',
    'root/store',
    'application/crossword',
    'application/cloze',
    'view/box',
    'view/crossword',
    'action/crossword',
    'view/cloze',
    'action/cloze',
], function (
    React,
    ReactDOM,
    Redux,
    ReactRedux,
    store,
    AppCrossword,
    AppCloze,
    VBox,
    VCrossword,
    ACrossword,
    VCloze,
    ACloze
) {
    let Provider = ReactRedux.Provider;

    AppCrossword();
    AppCloze();

    class App extends React.Component {
        render () {
            //const { crossword, onChooseItem, onRemoveItem } = this.props;
            const { cloze, onClozeChooseItem } = this.props;
            return (
                <div>
                    {/*<VBox/>*/}
                    {/*<VCrossword
                        itemList={crossword.get('itemList')}
                        blankList={crossword.get('blankList')}
                        sentenceList={crossword.get('sentenceList')}
                        onChooseItem={onChooseItem}
                        onRemoveItem={onRemoveItem}/>*/}
                    <VCloze
                        sentenceList={cloze.get('sentenceList')}
                        blankList={cloze.get('blankList')}
                        onChooseItem={onClozeChooseItem}/>
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            crossword: state.crossword,
            cloze: state.cloze,
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            onChooseItem: (index) => dispatch(ACrossword.chooseItem(index)),
            onRemoveItem: (index) => dispatch(ACrossword.removeItem(index)),
            onClozeChooseItem: (index) => dispatch(ACloze.chooseItem(index)),
        };
    }
    let ConnectComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);

    ReactDOM.render(
        <Provider store={store}>
            <ConnectComponent/>
        </Provider>,
        document.getElementById('content'));
});