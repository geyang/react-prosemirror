/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "react-highlight.js";
import PropsTable from "react-component-props-table";

import HappySandwichMakerExample from "../HappySandwichMaker.example";
import HappySandwichMakerSource from "!!raw!../HappySandwichMaker.example";
import HappySandwichMakerAST from "!!react-docgen!../HappySandwichMaker";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      # React ES6 Component Template

      [![github](https://img.shields.io/github/downloads/episodeyang/react-es6-template/total.svg?style=flat-square&maxAge=2592000)]()

      A template repo for react components written with es6 syntax.

      ## Usage (as a template)

      ~~~shell
      git clone https://github.com/episodeyang/react-es6-template \<name of your new component\>
      cd \<name of your new component\>
      rm -r .git

      # now do your git init, git add/coommit/push
      # replace "react-es6-template" with your own
      # replace "react es6 template" with your own
      # replace "react es6 component" with you own etc.
      ~~~

      After cloning from gitHub, you can run the example by doing
      ~~~shell
      npm run serve-docs
      ~~~

      And then open your browser at [http://localhost:5000](http://localhost:5000).

      This one calls webpack (you should look at the \`package.json\` source) and uses the
      webpack-dev-server to serve from \`./src/example/\` with hot module reloading.

      ### How is this README written:
      This readme is written with react and markdown. It includes:
      1. a **live react component demo**
      2. a table of the component's props that is generated automatically
      3. **source** of the example component

      ## Example Component: \`HappySandwichMaker\`
      This component makes you a delicious Subway sandwich.
      `}
      <HappySandwichMakerExample/>
      ### Props
      {`This table below is generated automatically`}
      <div className="table-container horizontal-scroll flex-column center">
        <PropsTable propMetaData={HappySandwichMakerAST.props}/>
      </div>
      {`
      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{HappySandwichMakerSource}</Highlight>
      {`
      ## Develop

      1. First make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
      2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      3. Then remember to push to master.

      `}
    </Markdown>
  )
}
