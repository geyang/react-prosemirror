/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "react-highlight";
import Badge from "../../react-doc-components/react-badge";
import PropsTable from "../../react-doc-components/react-component-props-table";

import HappySandwichMakerExample from "../HappySandwichMaker.example";
import HappySandwichMakerSource from "!!raw!../HappySandwichMaker.example";
const HappySandwichMakerAST = require("!!react-docgen!../HappySandwichMaker");

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>
      # React ES6 Component Template
      <Badge color="#23aaff" subject="VERSION" status="1.0.0"/>
      {`A template for react components written with es6 syntax.`}
      ## Usage
      <Highlight>
        git clone https://github.com/episodeyang/react-es6-template
      </Highlight>
      ## Example Component: `HappySandwichMaker`
      {`This component makes you a delicious Subway sandwich.`}
      <HappySandwichMakerExample/>
      ### Props
      <PropsTable propMetaData={HappySandwichMakerAST.props}
      />
      ### Code
      <Highlight>{HappySandwichMakerSource}</Highlight>
    </Markdown>
  )
}
