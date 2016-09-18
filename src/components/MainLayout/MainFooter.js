import React, {PropTypes} from 'react';
import {AppBar} from 'react-toolbox/lib/app_bar';
import style from './mainLayout.scss';

const MainFooter = (props) =>(
    <AppBar>
        <div>
            <a href="https://github.com/azzayan/azzayan.github.io" target="_blank">
                {"View code"}
            </a>
        </div>
        <div className={style.appBarCenterGrow}>
        </div>
        <div>
            <a className={style.followMeIcons} href="https://www.facebook.com/azzayan" target="_blank" alt="Facebook">
                <i className="fa fa-facebook fa-inverse"/>
            </a>
            <a className={style.followMeIcons} href="https://www.linkedin.com/in/azzayan" target="_blank" alt="LinkedIn">
                <i className="fa fa-linkedin fa-inverse"/>
            </a>
             <a className={style.followMeIcons} href="https://www.snapchat.com/add/azayan" target="_blank" alt="Snapchat">
                <i className="fa fa-snapchat-ghost fa-inverse"/>
            </a>
        </div>
    </AppBar>
);
MainFooter.propTypes = {};
export default MainFooter;