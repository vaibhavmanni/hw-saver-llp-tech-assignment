import React, { Component } from 'react'
import Navigation from '../../Navigation/navigation'
import axios from 'axios'
import Post from './Post/Post'
import styles from './Posts.module.css'
import { Header, Divider, Card } from 'semantic-ui-react'


export default class Posts extends Component {
    state = {
        posts: []
    } 
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({posts: res.data})
        })
    }
    render() {
        return (
            <div className={styles.container}>
            <Navigation/>
            <Header as='h1' textAlign='center'>Posts</Header>
            <Divider horizontal>.</Divider>
            <Card.Group className={styles.deck}>
                {this.state.posts.map(post => {
                    return <Post title={post.title} body={post.body} id={post.id} key={post.id} />
                })}
            </Card.Group>
            </div>
        )
    }
}
