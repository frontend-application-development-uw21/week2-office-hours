import React, { Component } from 'react';
import ArticleAuthor from './ArticleAuthor';

class Article extends Component {
    render() {
        // You can do whatever you want to do in render, as long as it doesn't affect component state
        console.log(this.props);

        // And whatever you return will be rendered to the page by React
        return (
            <div>
                {this.props.article.title}
                <ArticleAuthor author={this.props.article.author} />
            </div>
        )
    }
};

export default Article;