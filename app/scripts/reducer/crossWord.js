define(['immutable'], Immutable =>
    (state = Immutable.Map({
        itemList: Immutable.List(),
        blankList: Immutable.List(),
        sentenceList: Immutable.List()
    }), action) => {
        let index;          // 全局变量, 用于缓存查找用的 key 变量
        switch (action.type) {
            case 'CHOOSE_ITEM':
                // 寻找第一个没有设置内容的空格
                index = state.get('blankList').findIndex(v => !v.get('itemIndex') && 0 !== v.get('itemIndex'));
                // 如果都满了就直接返回原状, 不要操作
                // 如果有空间就更新选项列表和空格列表
                // 空格列表为对应项设置内容
                // 选项列表将对应项设为不可用
                return -1 === index ? state : state.update('blankList', l =>
                    l.update(index, j =>
                        j.set('itemIndex', action.index)
                    )
                ).update('itemList', l =>
                    l.update(action.index, j =>
                        j.set('availability', false)
                    )
                );
            case 'REMOVE_ITEM':
                // 寻找存放对应项目的空格
                index = state.get('blankList').findIndex(v => action.index === v.get('itemIndex'));
                // 把空格空了
                // 把原项还原可用
                return state.update('blankList', l =>
                    l.update(index, j =>
                        j.delete('itemIndex')
                    )
                ).update('itemList', l =>
                    l.update(action.index, j =>
                        j.set('availability', true)
                    )
                );
            case 'SET_ITEM':
                return state.update('itemList', () =>
                    Immutable.fromJS(action.items));
            case 'SET_SENTENCE':
                return state.update('sentenceList', () =>
                    Immutable.List(action.sentence));
            case 'SET_BLANK':
                return state.update('blankList', () =>
                    Immutable.fromJS(action.blank));
            default:
                return state;
        }
    }
);