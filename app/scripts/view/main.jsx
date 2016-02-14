/**
 * Created by KelvinSen on 2016/1/26.
 */
'use strict';
define(['react'], React => {
    class Main extends React.Component {
        render () {
            return (
                <div>
                    <a href='#box' style={{ fontSize: 28 }}>Box</a>&nbsp;
                    <a href='#reorder' style={{ fontSize: 28 }}>Reorder</a>&nbsp;
                    <a href='#cloze' style={{ fontSize: 28 }}>Cloze</a>&nbsp;
                    {/*<a href='#crossword' style={{ fontSize: 28 }}>Crossword</a>*/}
                    {this.props.children}
                </div>
            );
        }
    };
    return Main;
});