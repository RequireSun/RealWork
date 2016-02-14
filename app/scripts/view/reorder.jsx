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
        constructor (props) {
            super(props);
            this.state = {
                sentenceList: props.route.sentenceList,
                choiceItem: props.route.choiceItem,
            };
            this.onChooseItem = props.route.onChooseItem;
        }
        componentWillReceiveProps (nextProps) {
            this.setState({
                sentenceList: nextProps.route.sentenceList,
                choiceItem: nextProps.route.choiceItem,
            });
        }
        render () {
            return (
                <div className='reorder'>
                    <ul>
                        {this.state.sentenceList.map((item, index) =>
                            <ReorderItem onChooseItem={this.onChooseItem} active={index === this.state.choiceItem}
                                         item={item.get('sentence')} index={index} key={index}/>
                        )}
                    </ul>
                </div>
            );
        }
    }
    //Reorder.defaultProps = { sentenceList: Immutable.List() };

    return Reorder;
});