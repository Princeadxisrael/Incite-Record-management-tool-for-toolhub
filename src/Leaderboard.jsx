import React from "react";
import "./leaderboard.css";
import Nav from "./components/Nav";
import { leaderboardlist} from "./util/leaderboardlist";

export default function Leaderboard() {
  return (
    <div className="leaderboard">
      <Nav
        link1="/"
        link1Name="Homepage"
        link2="/dashboard"
        link2Name="Dashboard"
      />

      <table id="table">
        <caption>
        Loggers Ranking. Thank you for using Toolhub, and come 🔙 anytime!
        </caption>
        <thead>
          <tr>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardlist.sort.((currentValue, nextValue=> nextValue.score-currentValue.score)).map((value, index) => (
            <tr>
              <td>{value.userName}</td>
              <td>{value.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
