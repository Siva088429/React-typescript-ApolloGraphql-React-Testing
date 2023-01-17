import * as React from 'react';
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import FunnelGraphExample from 'components/funnel/FunnelGraphExample';

export const AppRoutes: React.FC = () => (
  <Switch>
    <Redirect exact={true} from={`/`} to={"/contact"} />
    <Route exact={true} path={"/contact"} component={Contact} />
    <Redirect exact={true} from={`/`} to ={"/funnel"}/>
    <Route exact={true} path={"/funnel"} component={FunnelGraphExample}/>
  </Switch>

);
