import React, { useState } from "react";
import styles from "./Album.module.css";
import { Card, Image } from "semantic-ui-react";

function Album(props) {
  const [display, setdisplay] = useState(false);
  return (
    <div className={styles.container}>
      <Card className={styles.card} role="button" onClick={() => setdisplay(!display)}>
        {display ? <Image src={props.url} wrapped ui={false} />: null}
        <Card.Content>
          <Card.Header>{props.id}</Card.Header>
          <Card.Description>
            {props.title}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
export default Album;
