import React, { useState } from "react";
import styles from './Post.module.css'
import { Card, Divider } from "semantic-ui-react";
function Post(props) {
  const [display, setdisplay] = useState(false);
  return (
    <div>
      <Card role="button" onClick={() => setdisplay(!display)} className={styles.card}>
        <Card.Content>
          <Card.Header>{props.id}</Card.Header>
          <Card.Description>{props.title}</Card.Description>
          <Divider horizontal>.</Divider>
          {display ? <Card.Description>{props.body}</Card.Description> : null}
        </Card.Content>
      </Card>
    </div>
  );
}
export default Post;
