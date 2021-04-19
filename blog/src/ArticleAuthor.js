import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleAuthor extends Component {
    static propTypes = {
        author: PropTypes.shape({
            name: PropTypes.string,
            image: PropTypes.string,
            isMediumMember: PropTypes.bool
        })
    }

    render() {
        const {author} = this.props;

        return (
            <div>
                {author.name}
            </div>
        );
    }
};

export default ArticleAuthor;