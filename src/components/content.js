import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/postAction'

class Content extends Component {
    constructor(){
        super()
        this.state={
            data:''
        }
    }
    componentWillMount(){
        const data = this.props.fetchPosts()
        
        this.setState({data:data})
    }
    thumbnailPhoto = (src) =>{
        //console.log(src)
        return <img src={src} alt={src} className="thumbnail"/>
    }
    render() {
        const post = this.props.posts.map((post)=>(
            <li key={post.data.created} className={post.data.thumbnail === 'self' ? "postList" : ""}>
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

const mapStateToProps = state =>({
    posts:state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Content)
