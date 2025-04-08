import React from "react";
import styles from "./Home.module.css";
import { blob } from "stream/consumers";
import { Button, Card, CardFooter, Image, Link } from "@heroui/react";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.heading}>
            <h1 style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              Chatly : Where AI Conversations Feel Alive
            </h1>
          </div>
          <div className={styles.tag}>
            <h2>
              Chat with AI - Smarter, Faster, More Human-like. Try it for free.
            </h2>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link href="/Chatly/ChatlyAI">
            <Button color="primary" href="/Chatly/ChatlyAI">
              Start Chatting
            </Button>
          </Link>
          <Button style={{ backgroundColor: "#292929" }}> Contact Me</Button>
        </div>
      </div>

      <div className={styles.card}>
        <img src="AI2.png" style={{ height: "500px", width: "500px" }} />
      </div>
    </div>
  );
};

export default Home;
