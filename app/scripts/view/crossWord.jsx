/**
 * Created by kelvinsun on 2016/1/6.
 */
'use strict';
define(['react', 'immutable'], function (React, Immutable) {
    class Word extends React.Component {
        render () {

            return (this.props.isBlank ?
                (<li className='blank'>{this.props.item}</li>) :
                (<li>{this.props.item}</li>));
        }
    }
    Word.defaultProps = {
        item: ''
    };

    class Sentence extends React.Component {
        render () {
            let blank = this.props.blank;
            return (
                <ul className='sentence'>
                    {this.props.list.map((item, index) =>
                        {
                            let isBlank = blank.find(value => index === value.get('sentenceIndex'));
                            let blankText = !!isBlank && (isBlank.get('itemIndex') || 0 === isBlank.get('itemIndex')) ?
                                this.props.item.get(isBlank.get('itemIndex')) : '';
                            return <Word item={!!isBlank ? blankText : item} index={index} key={index} isBlank={!!isBlank} />;
                        }
                    )}
                </ul>
            );
        }
    }
    Sentence.defaultProps = {
        list: Immutable.List(),
        blank: Immutable.List(),
        item: Immutable.List()
    };

    class ChooseItem extends React.Component {
        render () {
            return (
                <li onClick={this.props.onChooseItem.bind(this, this.props.index)}>{this.props.item}</li>
            );
        }
    }
    ChooseItem.defaultProps = {
        item: ''
    };

    class Choose extends React.Component {
        render () {
            return (
                <ul className='choose'>
                    {this.props.list.map((item, index) => { return <ChooseItem item={item} index={index} key={index} onChooseItem={this.props.onChooseItem}/>})}
                </ul>
            );
        }
    }
    Choose.defaultProps = {
        list: Immutable.List()
    };

    class Crossword extends React.Component {
        render () {
            return (
                <div className='crossword'>
                    <Sentence list={this.props.sentenceList} blank={this.props.blankList} item={this.props.itemList}/>
                    <Choose list={this.props.itemList} onChooseItem={this.props.onChooseItem}/>
                </div>
            );
        }
    }
    return Crossword;
});