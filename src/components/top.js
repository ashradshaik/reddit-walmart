import React, { Component } from 'react'
import {fetchTopPost} from '../redux/actions/postAction'
import {connect} from 'react-redux'

class Top extends Component {
    componentWillMount(){
        this.props.fetchTopPost()
    }
    thumbnailPhoto = (src) =>{
        //console.log(src)
        return <img src={src} alt={src} className="thumbnail"/>
    }
    render() {
        const post = this.props.posts.map((post)=>(
            <li key={post.data.created} cclassName={post.data.thumbnail === 'self' ? "postList" : ""}>
                <h1>{post.data.title}</h1>
                <p>{post.data.thumbnail === 'self' ? post.data.selftext : this.thumbnailPhoto(post.data.url)}</p>
            </li>
        ))
        return (
            <div className="main-container">
                <div className="left-container">
                    <ul className="posts">
                        {post}
                    </ul>
                </div>
                <div className="right-container">
                    <h3>Commuity Details</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=> ({
    posts:state.posts.items
})


export default connect(mapStateToProps, {fetchTopPost})(Top)
