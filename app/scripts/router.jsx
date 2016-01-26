/**
 * Created by KelvinSen on 2016/1/26.
 */
'use strict';
define([
    'react',
    'ReactRouter',
    'view/main',
    'view/box',
    'view/reorder',
    'view/cloze',
    'view/crossword',
], (React, ReactRouter, Main, Box, Reorder, Cloze, Crossword) => {
    const { Router, Route } = ReactRouter;
    return (
        <Router>
            <Route path='/' component={Main}>
                <Route path='box' component={Box}></Route>
                <Route path='reorder' component={Reorder}></Route>
                <Route path='cloze' component={Cloze}></Route>
                <Route path='crossword' component={Crossword}></Route>
            </Route>
        </Router>
    );
});