import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import style from "./about.scss";
const hobbies = {
  title: "hobbies",
  items: [
    "National parks (28 of 59 so far)",
    "Brewing beer",
    "Karaoke",
    "Board games",
    "Amassing T-shirts",
    "Broadway musicals",
    "Live comedy shows",
    "Mild form of Tourettes",
    "Skydiving (never again)",
  ],
};
const bio = {
  title: "bio",
  items: [
    "Born: Cairo, Egypt",
    "Moved: Chambersburg, PA",
    "Moved again: Plano, TX",
    "Moved again: Dallas, TX",
    "High school: Plano East",
    "College: UT Dallas",
    "Degree: Cognitive Science",
    "Job: Software engineer",
  ],
};
const List = ({ title, items }) => (
  <div>
    <span className={style.listTitle}>{title}</span>
    <ul className={style.list}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`}>{item}</li>
      ))}
    </ul>
  </div>
);
export default class About extends Component {
  render() {
    return (
      <div className={style.aboutContainer}>
        <List {...bio} />
        <List {...hobbies} />
      </div>
    );
  }
}

About.propTypes = {};
