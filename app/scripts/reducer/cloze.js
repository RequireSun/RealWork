/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['immutable'], Immutable =>
    (state = Immutable.Map({
        list: Immutable.List()
    }), action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
);