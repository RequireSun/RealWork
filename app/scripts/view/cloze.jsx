/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['react', 'immutable'], function (React, Immutable) {
    class ClozeItem extends React.Component {
        render () {
            return this.props.blankObject ?
                (<li className='blank' onClick={this.props.onChooseItem.bind(this, this.props.index)}>{this.props.item}</li>) :
                (<li>{this.props.item}</li>);
        }
    }

    class Cloze extends React.Component {
        render () {
            return (
                <div className='cloze'>
                    <ul>
                    {this.props.sentenceList.map((item, index) => {
                        let blankObject = this.props.blankList.find(value => index === value.get('sentenceIndex'));
                        let blankChoice, blankText;
                        if (!!blankObject) {
                            blankChoice = blankObject.get('choiceIndex') || 0;
                            blankText = blankObject.get('items').get(blankChoice);
                        } else {
                            blankChoice = undefined;
                            blankText = '';
                        }
                        return <ClozeItem onChooseItem={this.props.onChooseItem} item={!!blankObject ? blankText : item}
                            index={index} key={index} blankObject={blankObject} choiceIndex={blankChoice}/>;
                    })}
                    </ul>
                </div>
            );
        }
    }
    return Cloze;
});