/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['react', 'immutable'], function (React, Immutable) {
    class ArticleItem extends React.Component {
        render () {
            return this.props.blankObject ?
                (<li className='blank' onClick={this.props.onChooseItem.bind(this, this.props.index)}>{this.props.item}</li>) :
                (<li>{this.props.item}</li>);
        }
    }

    class Article extends React.Component {
        render () {
            return (
                <ul>
                    {this.props.list.map((item, index) => {
                        let blankObject = this.props.blank.find(value => index === value.get('sentenceIndex'));
                        let blankChoice, blankText;
                        if (!!blankObject) {
                            blankChoice = blankObject.get('choiceIndex') || 0;
                            blankText = blankObject.get('items').get(blankChoice);
                        } else {
                            blankChoice = undefined;
                            blankText = '';
                        }
                        return <ArticleItem onChooseItem={this.props.onChooseItem} item={!!blankObject ? blankText : item}
                                            index={index} key={index} blankObject={blankObject} choiceIndex={blankChoice}/>;
                    })}
                </ul>
            );
        }
    }
    Article.defaultProps = {
        list: Immutable.List(),
        blank: Immutable.List(),
    };

    class Cloze extends React.Component {
        render () {
            return (
                <div className='cloze'>
                    <Article list={this.props.sentenceList} blank={this.props.blankList} onChooseItem={this.props.onChooseItem}/>
                </div>
            );
        }
    }
    return Cloze;
});