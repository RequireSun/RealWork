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
                        <div className="front">我</div>
                        <div className="back">爱</div>
                        <div className="left">你</div>
                        <div className="right">李</div>
                        <div className="top">漂</div>
                        <div className="bottom">亮</div>
                    </div>
                </div>
            );
        }
    }
    Box.propTypes = { active: React.PropTypes.string };
    Box.defaultProps = { active: 0, classes: ['front', 'left', 'back', 'right', 'top', 'bottom'] };

    return Box;
});