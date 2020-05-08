/*
 * This file is part of Invenio.
 * Copyright (C) 2020 CERN.
 *
 * Invenio is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import { App } from "./App";
import ReactDOM from "react-dom";
import React from 'react';

export function initSearchApp(ID, config) {
  return ReactDOM.render(
    <App config={config} />,
    document.getElementById(ID)
  );
}

window.initSearchApp = initSearchApp;
