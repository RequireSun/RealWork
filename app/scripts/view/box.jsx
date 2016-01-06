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
                active: this.state.active + 1 % this.state.classes.length
            });
        }
        render () {
            return (
                <div className='stage'>
                    <div onClick={this.changeActive.bind(this)}
                         className={'hexahedron ' + this.state.classes[this.state.active % this.state.classes.length]}>
                        <div className="front">A</div>
                        <div className="back">B</div>
                        <div className="left">C</div>
                        <div className="right">D</div>
                        <div className="top">E</div>
                        <div className="bottom">F</div>
                    </div>
                </div>
            );
        }
    }
    Box.propTypes = { active: React.PropTypes.string };
    Box.defaultProps = { active: 0, classes: ['front', 'left', 'back', 'right', 'top', 'bottom'] };

    return Box;
});