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
    'ReactRouter',
    'root/store',
    'view/box',
    'view/crossword',
    'action/crossword',
    'application/crossword',
    'view/cloze',
    'action/cloze',
    'application/cloze',
    'view/reorder',
    'action/reorder',
    'application/reorder',
    'root/router',
], function (
    React,
    ReactDOM,
    Redux,
    ReactRedux,
    ReactRouter,
    store,
    VBox,
    VCrossword,
    ACrossword,
    AppCrossword,
    VCloze,
    ACloze,
    AppCloze,
    VReorder,
    AReorder,
    AppReorder,
    Router
) {
    //React.initializeTouchEvents(true);
    let Provider = ReactRedux.Provider;

    AppCrossword();
    AppCloze();
    AppReorder();

    //class App extends React.Component {
    //    render () {
    //        const { reorder, onReorderChooseItem } = this.props;
    //        //const { cloze, onClozeChooseItem } = this.props;
    //        //const { crossword, onChooseItem, onRemoveItem } = this.props;
    //        return (
    //            <div>
    //                {/*<VBox/>*/}
    //                <VReorder sentenceList={reorder.get('sentenceList')}
    //                          choiceItem={reorder.get('choiceItem')}
    //                          onChooseItem={onReorderChooseItem}/>
    //                {/*<VCloze
    //                 sentenceList={cloze.get('sentenceList')}
    //                 blankList={cloze.get('blankList')}
    //                 onChooseItem={onClozeChooseItem}/>*/}
    //                {/*<VCrossword
    //                    itemList={crossword.get('itemList')}
    //                    blankList={crossword.get('blankList')}
    //                    sentenceList={crossword.get('sentenceList')}
    //                    onChooseItem={onChooseItem}
    //                    onRemoveItem={onRemoveItem}/>*/}
    //            </div>
    //        );
    //    }
    //}

    function mapStateToProps(state) {
        return {
            reorder: state.reorder,
            cloze: state.cloze,
            crossword: state.crossword,
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            onReorderChooseItem: (index) => dispatch(AReorder.chooseItem(index)),
            onClozeChooseItem: (index) => dispatch(ACloze.chooseItem(index)),
            onCrosswordChooseItem: (index) => dispatch(ACrossword.chooseItem(index)),
            onCrosswordRemoveItem: (index) => dispatch(ACrossword.removeItem(index)),
        };
    }
    let ConnectComponent = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Router);

    ReactDOM.render(
        <Provider store={store}>
            <ConnectComponent/>
        </Provider>,
        document.getElementById('content')
    );
});