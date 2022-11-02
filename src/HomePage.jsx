import React from "react";
import { Link } from "react-router-dom";
import "./Homepagestyle.css";
// import tick from "./components/time";
import Nav from "./components/Nav";

export default function HomePage() {
  return (
    <>
      <Nav
        link1="/dashboard"
        link1Name="Dashboard"
        link2="/leaderboard"
        link2Name="Leaderboard"
      />

      {/* <tick /> */}
      <h1 className="firstheading">
        Incite
        <sub
          style={{ fontSize: "20px", fontFamily: "Gill Sans", color: "green" }}
        >
          a minimalist record tool for toolhub
        </sub>
      </h1>
      <br />
      <p style={{ margin: "10px" }}>
        The Toolhub snippet below is not backed by a reliable source. Can you
        find one?
      </p>
      <p style={{ margin: "10px" }}>
        Click <b>Add to Toolhub!</b> to go to Toolhub and fix the snippet, or
        <b> Next citation!</b> to see another one. Good luck!
      </p>
      <br />
      <br />
      <br />
      <p>
        <h1 id="heading">Check the Records?</h1>

        <input
          className="input"
          placeholder="search for missing citation"
        ></input>
      </p>
      <button>
        {" "}
        <Link
          to="https://www.mediawiki.org/wiki/Extension:Cite"
          target="_blank"
        >
          Add to Toolhub
        </Link>
      </button>
      <button>
        <Link to="https://www.mediawiki.org/wiki/Help:Cite" target="_blank">
          Next Citation
        </Link>
      </button>
      <br />
      <p className="endingComment">
        Hey! My source is on GitHub!
        <br />
        Incite is made by volunteers, <br />
        hosted on Wikimedia and translated via translatewiki.net.
      </p>
    </>
  );
}
