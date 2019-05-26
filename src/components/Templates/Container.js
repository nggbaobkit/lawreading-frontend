import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage.js";
import SearchPage from "../CreateAudioPage/SearchPage.js";
import SearchLawPage from "../SearchLawPage/SearchLawPage.js";
import StreamPage from "../SearchLawPage/StreamPage.js";
import FeedbackPage from "../FeedbackPage/FeedbackPage.js"

function Container() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={FeedbackPage} />
          <Route path="/search" component={SearchLawPage} />
          <Route path="/createaudio" component={SearchPage} />          
          {/* <Route path="/test" component={() => <div>idk</div>} /> */}
        </Switch>
    </div>
  );
}



export default Container;