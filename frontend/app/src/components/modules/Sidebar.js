import React from 'react';
import ReactSidebar from 'react-sidebar';
import AllPageLinks from '../block/AllPageLinks.js';
import routes from '../../routes.js';
import { Route, Switch, withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: true
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <ReactSidebar
          sidebar={
              <div className='Sidebar'>
                <AllPageLinks />
              </div>
            }
          open={
            this.state.sidebarOpen
          }
          onSetOpen={
            this.onSetSidebarOpen
          }
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            ：
          </button>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                  key={idx}
              />
            ))}
          </Switch>
        </ReactSidebar>
      );
    }
  }
  
  
export default withRouter(Sidebar);