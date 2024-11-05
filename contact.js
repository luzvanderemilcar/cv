import dataModel from "/cvData.js";

import getIcon from '/getIcon.js';
import icons from '/icons.js';
import memoize from "/memoize.js";
const iconMemoize = memoize(getIcon)

import { createFooter } from '/view.js';

let {contact} = dataModel;
