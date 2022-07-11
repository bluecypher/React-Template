
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import { ChakraProvider } from "@chakra-ui/react";
// Custom Chakra theme
import theme from "theme/theme.js";
import Routes from './routes';

ReactDOM.render(
  <ChakraProvider theme={theme} resetCss={false} position="relative">
    {/* <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Redirect from={`/`} to="/admin/dashboard" />
      </Switch>
    </HashRouter> */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
