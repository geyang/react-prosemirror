/**
 * Created by ge on 6/24/16.
 */
import React from "react";
import Markdown from "react-markdownit";

import Highlight from "@episodeyang/react-highlight.js";
import PropsTable from "react-component-props-table";

import ProseMirrorExample from "../ProseMirror.example";
import ProseMirrorSource from "!!raw!../ProseMirror.example";
import ProseMirrorAST from "!!react-docgen!../ProseMirror";

export default function Readme({}) {
  return (
    <Markdown stripIndent={true}>{`
      ### How is this README written:
      This readme is written with react and markdown. It includes:
      1. a **live react component demo**
      2. a table of the component's props that is generated automatically
      3. **source** of the example component

      ## Example Component: \`ProseMirror\`
      This component makes you a delicious Subway sandwich.
      `}
      <ProseMirrorExample/>
      ### Props
      {`This table below is generated automatically`}
      <div className="table-container horizontal-scroll flex-column center">
        <PropsTable propMetaData={ProseMirrorAST.props}/>
      </div>
      {`
      ### Usage Example

      The source code below of the example above is loaded using the webpack raw loader.`}
      <Highlight>{ProseMirrorSource}</Highlight>
      {`
      ## Develop

      1. First make your changes, then git commit. Use \`serve-docs\` to view live update at [http://localhost:5000](http://localhost:5000).
      2. run \`build-docs\`, \`build-static-docs\`, \`gh-pages\`
      3. Then remember to push to master.

      `}
    </Markdown>
  )
}
