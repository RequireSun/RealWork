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
                case 'cloze':
                    location.hash = '#/crossword';
                    break;
                case 'crossword':
                    location.hash = '#/page1';
                    break;
                case 'reorder':
                default:
                    location.hash = '#/cloze';
                    break;
            }
        }
        touchStart (e) {
            e.changedTouches[0] && (this.startPos = e.changedTouches[0].screenY);
        }
        touchEnd (e) {
            if (e.changedTouches[0] && this.startPos) {
                if (100 < e.changedTouches[0].screenY - this.startPos) {
                    // 上一页
                    if ('page2' === this.state.page) {
                        location.hash = '#/page1';
                    }
                } else if (100 < this.startPos - e.changedTouches[0].screenY) {
                    // 下一页
                    if ('page1' === this.state.page) {
                        location.hash = '#/page2';
                    }
                }
            }
        }
        render () {
            let component, victoryClass, upCount = 0;
            switch (this.state.page) {
                case 'page1':
                    upCount = 1;
                    break;
                case 'page2':
                    upCount = 2;
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
                <ul className='round-stage'>
                    <li className={upCount > 0 ? 'up' : ''} style={{ zIndex: 3 }}>
                        <div className="game-sun"></div>
                        {component}
                        <div className='game-building'></div>
                        <dialog className={victoryClass}>
                            <button onClick={this.changeHash.bind(this)}>看看还有啥</button>
                        </dialog>
                    </li>
                    <li className={upCount > 1 ? 'up' : ''} style={{ zIndex: 2 }}
                        onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
                        <p className='text-block text-sm text-short text-left'
                           style={{ top: '5%' }}>
                            文字文字文字文字文字文字文字文字文字
                        </p>
                        <p className='text-block text-md text-short text-right'
                            style={{ bottom: '12%', right: '5%' }}>
                            文字文字文字文字文字文字文字文字文字
                        </p>
                        <img src='../../images/240x360.png' className='img-block img-md img-right'
                            style={{ bottom: '10%', left: '50%', marginLeft: '-1.2rem' }}/>
                        <img src='../../images/240x360.png' className='img-block img-sm img-left'
                             style={{ top: '10%', right: '50%', marginRight: '-1.2rem' }}/>
                        <div className='next-page'>
                            <span></span>
                        </div>
                    </li>
                    <li className={upCount > 2 ? 'up' : ''} style={{ zIndex: 1 }}
                        onTouchStart={this.touchStart.bind(this)} onTouchEnd={this.touchEnd.bind(this)}>
                        <img src='../../images/240x360.png' className='img-block img-sm img-left'
                            style={{ bottom: '10%', left: '50%', marginLeft: '-1.2rem' }}/>
                        <img src='../../images/240x360.png' className='img-block img-md img-right'
                            style={{ top: '10%', right: '50%', marginRight: '-1.2rem' }}/>
                        <div className='last-page'>
                            <span></span>
                        </div>
                    </li>
                </ul>
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