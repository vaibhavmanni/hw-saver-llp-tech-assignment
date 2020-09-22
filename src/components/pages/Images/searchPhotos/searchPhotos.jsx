import React, { useState } from "react";
import styles from "./searchPhotos.module.css";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "RoEB_Q9p9sqCRMM6Oo_E9LEaPtKpPBKxOc2hUS8aegM",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    // console.log("Submitting the Form");
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        // console.log(json);
        setPics(json.results);
      });
  };
  console.log(query);
  return (
    <>
      <form className={styles.form} onSubmit={searchPhotos}>
        <label className={styles.label} htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className={styles.input}
          placeholder={`Type something..`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <div className={styles.cardList}>
        {pics.map((pic) => (
          <div className={styles.card} key={pic.id}>
            <img
              className={styles.cardImage}
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
