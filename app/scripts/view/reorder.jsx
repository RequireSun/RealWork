/**
 * Created by KelvinSen on 2016/1/23.
 */
define(['react', 'immutable'], (React, Immutable) => {
    class ReorderItem extends React.Component {
        render () {
            return (
                <li className={this.props.active ? 'active' : ''} onClick={this.props.onChooseItem.bind(this, this.props.index)}>{this.props.item}</li>
            );
        }
    }

    class Reorder extends React.Component {
        render () {
            return (
                <div className='reorder'>
                    <ul>
                        {this.props.sentenceList.map((item, index) =>
                            <ReorderItem onChooseItem={this.props.onChooseItem} active={index === this.props.choiceItem}
                                         item={item.get('sentence')} index={index} key={index}/>
                        )}
                    </ul>
                </div>
            );
        }
    }

    return Reorder;
});