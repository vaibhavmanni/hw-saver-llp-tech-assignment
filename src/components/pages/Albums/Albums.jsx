import React, { Component } from 'react'
import Navigation from '../../Navigation/navigation'
import axios from 'axios'
import Album from './Album/Album'
import styles from './Albums.module.css'
import { Header, Divider, Card } from 'semantic-ui-react'


export default class Posts extends Component {
    state = {
        albums: []
    } 
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(res => {
            this.setState({albums: res.data})
        })
    }
    render() {
        return (
            <div className={styles.container}>
            <Navigation/>
            <Header as='h1' textAlign='center'>Albums</Header>
            <Divider horizontal>.</Divider>
            <Card.Group className={styles.deck}>
                {this.state.albums.map(album => {
                    return <Album title={album.title} url={album.url} thumbnailUrl={album.ThumbnailUrl} id={album.id} key={album.id} />
                })}
            </Card.Group>
            </div>
        )
    }
}
