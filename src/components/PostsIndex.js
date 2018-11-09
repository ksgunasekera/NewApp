import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { fetchPosts } from "../actions";


class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    handdlePosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        //console.log(this.props.posts);
        return(
            <div>
                <div className="text-xs-right">
                    <Link  className="btn btn-primary" to="/post/new">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.handdlePosts()}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts};
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);