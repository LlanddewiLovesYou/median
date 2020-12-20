import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./LandingPage.scss";

interface Props {}

export const LandingPage: React.FC<Props> = (props) => {
  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <div className="header">Dive deeper on topics that matter to Ian.</div>
        <div className="sub-header">
          <u>Med</u>ia related to <u>Ian</u>... <u>Median</u>.
        </div>
        <Link to="/posts">
          <Button buttonType="transparent">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};
