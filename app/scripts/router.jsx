/**
 * Created by KelvinSen on 2016/1/26.
 */
'use strict';
define([
    'react',
    'ReactRouter',
    'view/main',
    'view/box',
    'view/reorder',
    'view/cloze',
    'view/crossword',
], (React, ReactRouter, Main, Box, Reorder, Cloze, Crossword) => {
    const { Router, Route, browserHistory } = ReactRouter;
    class MyRouter extends React.Component {
        constructor (props) {
            super(props);

            const { reorder, cloze, crossword,
                    onReorderChooseItem, onClozeChooseItem,
                    onCrosswordChooseItem, onCrosswordRemoveItem } = props;

            this.state = { reorder, cloze, crossword,
                           onReorderChooseItem, onClozeChooseItem,
                           onCrosswordChooseItem, onCrosswordRemoveItem };
        }
        componentWillReceiveProps (nextProps) {
            const { reorder, cloze, crossword,
                    onReorderChooseItem, onClozeChooseItem,
                    onCrosswordChooseItem, onCrosswordRemoveItem } = nextProps;

            this.setState({
                reorder, cloze, crossword,
                onReorderChooseItem, onClozeChooseItem,
                onCrosswordChooseItem, onCrosswordRemoveItem
            });
        }
        render () {
            return (
                <Router history={browserHistory}>
                    <Route path='/' component={Main}>
                        <Route name='box' path='box' component={Box}></Route>
                        <Route name='reorder' path='reorder' component={Reorder}
                               sentenceList={this.state.reorder.get('sentenceList')}
                               choiceItem={this.state.reorder.get('choiceItem')}
                               time={Date.now()}
                               onChooseItem={this.state.onReorderChooseItem}/>
                        <Route name='cloze' path='cloze' component={Cloze}
                               sentenceList={this.state.cloze.get('sentenceList')}
                               blankList={this.state.cloze.get('blankList')}
                               onChooseItem={this.state.onClozeChooseItem}/>
                        <Route name='crossword' path='crossword' component={Crossword}
                               itemList={this.state.crossword.get('itemList')}
                               blankList={this.state.crossword.get('blankList')}
                               sentenceList={this.state.crossword.get('sentenceList')}
                               onChooseItem={this.state.onCrosswordChooseItem}
                               onRemoveItem={this.state.onCrosswordRemoveItem}/>
                    </Route>
                </Router>
            );
        }
    }
    return MyRouter;
});