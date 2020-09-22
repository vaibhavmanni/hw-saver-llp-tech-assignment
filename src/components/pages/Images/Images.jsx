import React, { Component } from "react";
import styles from "./Images.module.css";
import Navigation from "../../Navigation/navigation";
import SearchPhotos from "./searchPhotos/searchPhotos"
import { Divider } from 'semantic-ui-react'

export default class Images extends Component {
  render() {
    return (
      <div className={styles.something}>
        <Navigation />
        <div className={styles.outerContainer}>
          <div className={styles.container}>
            <Divider horizontal>.</Divider>
            <h1 className={styles.title}>Search Images</h1>
            <SearchPhotos />
          </div>
        </div>
      </div>
    );
  }
}
