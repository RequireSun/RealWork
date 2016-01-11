/**
 * Created by KelvinSen on 2016/1/10.
 */
define(['react', 'immutable'], function (React, Immutable) {
    class ArticleItem extends React.Component {
        render () {
            return <li></li>;
        }
    }

    class Article extends React.Component {
        render () {
            return (
                <ul>
                    {this.props.list.map(item =>
                        <ArticleItem/>
                    )}
                </ul>
            );
        }
    }
    Article.defaultProps = {
        list: Immutable.List()
    };

    class Cloze extends React.Component {
        render () {
            return (
                <div className='cloze'>
                    <Article/>
                </div>
            );
        }
    }
    return Cloze;
});