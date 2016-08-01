/**
 * Created by az on 7/31/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AppBar, Drawer, MenuItem, Subheader} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
var drawerOpen = false;
function toggleDrawer() {
    drawerOpen = !drawerOpen;
    render();
}
const App = () => (
     <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <AppBar title="Welcome, I am AZ"
                    onLeftIconButtonTouchTap={toggleDrawer}
                    iconClassNameRight="muidocs-icon-navigation-expand-more">
            </AppBar>
            <h2>Coming soon...</h2>
            <Drawer open={drawerOpen} docked={false}>
                <MenuItem onTouchTap={toggleDrawer}>Close me...</MenuItem>
            </Drawer>
        </div>
    </MuiThemeProvider>
);
render();

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('content')
    );
}