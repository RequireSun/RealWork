/**
 * Created by KelvinSen on 2016/1/5.
 */
'use strict';

requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        view: '../view',
        root: '..'
    }
});

requirejs([
    'react',
    'view/box'
], function (React, Box) {
    console.log('success!');

    class App extends React.Component {
        render () {
            return (
                React.createElement('div', {}, [
                    React.createElement(Box)
                ])
            );
        }
    }

    React.render(React.createElement(App), document.getElementById('content'));
});