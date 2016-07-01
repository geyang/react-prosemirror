/**
 * Created by ge on 6/23/16.
 */
import React from "react";
import {render} from "react-dom";
import { AppContainer } from "react-hot-loader";
import Readme from "./Readme";

const readmeContainer = document.body.querySelector('#readme-container');
render(<AppContainer><Readme/></AppContainer>, readmeContainer);

if (module.hot) {
  module.hot.accept('./Readme', () => {
    const NextReadme = require('./Readme').default;
    render(
      <AppContainer>
        <NextReadme/>
      </AppContainer>,
      readmeContainer
    );
  });
}
