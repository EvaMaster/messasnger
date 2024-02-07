import React from 'react';
import './styles/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./static/routes/routerPathList";
import Dashboard from "./components/Dashboard";

export const bc = new BroadcastChannel('tunnel');

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={'dashboard/:id'}
        element={<Dashboard />}
      />
      {
        routes
          .map((route: { path: any, component: any, }) => {
            const {path, component} = route;
            return <Route key={path} path={path} element={component}/>;
          })
      }
    </Routes>
  </BrowserRouter>
)

export default App;
