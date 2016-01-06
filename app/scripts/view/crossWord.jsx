/**
 * Created by kelvinsun on 2016/1/6.
 */
'use strict';
define(['react', 'immutable'], function (React, Immutable) {
    //class Word extends React.Component {
    //    render ();
    //}
    //
    //class Sentence extends React.Component {
    //    render () {
    //        return ();
    //    }
    //}
    //
    class ChooseItem extends React.Component {
        render () {
            return (
                <li>{this.props.text}</li>
            );
        }
    }

    class Choose extends React.Component {
        render () {
            return (
                <ul>
                    {this.props.list.map((item, index) => { return <ChooseItem text={item} index={index} key={index}/>})}
                </ul>
            );
        }
    }
    Choose.defaultProps = {
        list: Immutable.List()
    };

    class CrossWord extends React.Component {
        //constructor (props) {
        //    super(props);
        //    this.state = props;
        //}
        render () {
            return (
                <div>
                    {/*<Sentence/>*/}
                    <Choose list={this.props.itemList}/>
                </div>
            );
        }
    }
    return CrossWord;
});