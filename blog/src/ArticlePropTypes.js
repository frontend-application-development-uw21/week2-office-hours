import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
    // You can define propTypes as one prop, an object, like so:

    // static propTypes = {
    //     article: PropTypes.shape({
    //         title: PropTypes.string,
    //         description: PropTypes.string
    //     })
    // }

    // Or you can define propTypes as separate props, like so:
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
};

export default Article;