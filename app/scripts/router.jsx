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
    //const { Router, Route, browserHistory } = ReactRouter;
    class MyRouter extends React.Component {
        constructor (props) {
            super(props);

            const { reorder, cloze, crossword,
                    onReorderChooseItem, onClozeChooseItem,
                    onCrosswordChooseItem, onCrosswordRemoveItem } = props;

            let page = (location.hash || '').replace(/\#\/?([^\?]+)\??.*/, (word, part) => part);
            window.addEventListener('hashchange', () =>
                this.setState({
                    page: (location.hash || '').replace(/\#\/?([^\?]+)\??.*/, (word, part) => part)
                })
            );

            this.state = { reorder, cloze, crossword,
                           onReorderChooseItem, onClozeChooseItem,
                           onCrosswordChooseItem, onCrosswordRemoveItem,
                           page };
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
        changeHash () {
            switch (this.state.page) {
                case 'reorder':
                    location.hash = '#/cloze';
                    break;
                case 'cloze':
                    location.hash = '#/crossword';
                    break;
                case 'crossword':
                    location.hash = '#/box';
                    break;
            }
        }
        render () {
            let component, victoryClass;
            switch (this.state.page) {
                case 'box':
                    break;
                case 'cloze':
                    victoryClass = this.state.cloze.get('victory');
                    component = (<Cloze sentenceList={this.state.cloze.get('sentenceList')}
                                        blankList={this.state.cloze.get('blankList')}
                                        onChooseItem={this.state.onClozeChooseItem}/>);
                    break;
                case 'crossword':
                    victoryClass = this.state.crossword.get('victory');
                    component = (<Crossword itemList={this.state.crossword.get('itemList')}
                                            blankList={this.state.crossword.get('blankList')}
                                            sentenceList={this.state.crossword.get('sentenceList')}
                                            onChooseItem={this.state.onCrosswordChooseItem}
                                            onRemoveItem={this.state.onCrosswordRemoveItem}/>);
                    break;
                case 'reorder':
                default:
                    victoryClass = this.state.reorder.get('victory');
                    component = (<Reorder time={Date.now()}
                                          sentenceList={this.state.reorder.get('sentenceList')}
                                          choiceItem={this.state.reorder.get('choiceItem')}
                                          onChooseItem={this.state.onReorderChooseItem}/>);
                    break;
            }
            victoryClass = victoryClass ? 'victory active' : 'victory';
            return (
                <div>
                    {/*<a href='#reorder' style={{ fontSize: 20 }}>Reorder</a>&nbsp;
                    <a href='#cloze' style={{ fontSize: 20 }}>Cloze</a>&nbsp;
                    <a href='#crossword' style={{ fontSize: 20 }}>Crossword</a>&nbsp;*/}
                    <div className="game-sun"></div>
                    {component}
                    <div className='game-building'></div>
                    <dialog className={victoryClass}>
                        <button onClick={this.changeHash.bind(this)}>看看还有啥</button>
                    </dialog>
                </div>
            );
            /*return (
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
            );*/
        }
    }
    return MyRouter;
});