/**
 * Created by ge on 6/26/16.
 */
import React from "react";
import {renderToString} from 'react-dom/server';

import Readme from './Readme';
var string = renderToString(<Readme/>);
console.log(string);

