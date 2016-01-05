/**
 * Created by KelvinSen on 2016/1/5.
 */
'use strict';
define(['react'], function (React) {
    class Box extends React.Component {
        constructor (props) {
            super(props);
            this.state = props;
        }
        changeActive () {
            this.setState({
                active: this.state.active + 1
            });
        }
        render () {
            return (
                <div className='stage'>
                    <div onClick={this.changeActive.bind(this)}
                         className={'hexahedron ' + this.state.classes[this.state.active % this.state.classes.length]}>
                        <div className="front">a</div>
                        <div className="back">b</div>
                        <div className="left">c</div>
                        <div className="right">d</div>
                        <div className="top">e</div>
                        <div className="bottom">f</div>
                    </div>
                </div>
            );
        }
    }
    Box.propTypes = { active: React.PropTypes.string };
    Box.defaultProps = { active: 0, classes: ['front', 'back', 'left', 'right', 'top', 'bottom'] };

    return Box;
});