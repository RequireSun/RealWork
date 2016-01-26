/**
 * Created by kelvinsun on 2016/1/6.
 */
'use strict';
define(['react', 'immutable'], (React, Immutable) => {
    class Word extends React.Component {
        render () {
            return (this.props.blankObject ?
                (this.props.item ?
                    (<li className='blank' onClick={this.props.onRemoveItem.bind(this, this.props.itemIndex)}>{this.props.item}</li>) :
                    (<li className='blank'>&nbsp;</li>)) :
                (<li>{this.props.item}</li>));
        }
    }
    Word.defaultProps = {
        item: '',
        blankObject: false,
        itemIndex: undefined
    };

    class Sentence extends React.Component {
        render () {
            let blank = this.props.blank;
            return (
                <ul className='sentence'>
                    {this.props.list.map((item, index) => {
                        let blankObject = blank.find(value => index === value.get('sentenceIndex'));
                        let blankText, itemIndex;
                        if (!!blankObject) {
                            itemIndex = blankObject.get('itemIndex');
                            blankText = this.props.item.get(itemIndex);
                        } else {
                            itemIndex = undefined;
                            blankText = '';
                        }
                        return <Word onRemoveItem={this.props.onRemoveItem} item={!!blankObject ? blankText : item}
                                     index={index} key={index} blankObject={blankObject} itemIndex={itemIndex}/>;
                    })}
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
            return this.props.item.get('availability') ?
                (<li onClick={this.props.onChooseItem.bind(this, this.props.index)}>{this.props.item.get('text')}</li>) :
                (<li>&nbsp;</li>);
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
        constructor (props) {
            super(props);
        }
        render () {
            return (
                <div className='crossword'>
                    <Sentence onRemoveItem={this.props.onRemoveItem} list={this.props.sentenceList}
                              blank={this.props.blankList} item={this.props.itemList}/>
                    <Choose list={this.props.itemList} onChooseItem={this.props.onChooseItem}/>
                </div>
            );
        }
    }
    return Crossword;
});