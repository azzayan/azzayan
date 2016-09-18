import React from 'react';
import style from './contact.scss';

const Contact = ()=>(
    <div className={style.contactContainer}>
        <div className={style.email}>
            <a href="mailto:azzayan@gmail.com">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary">
                </i>
                <i className="fa fa-envelope-o fa-stack-1x fa-inverse">
                </i>
              </span>
                <h4>azzayan@gmail.com </h4>
            </a>
        </div>
        <div className={style.phoneNumber}>
            <a href="tel:1-214-566-8124">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
              </span>
                <h4>(214) 566-8124</h4>
            </a>
        </div>
    </div>
);
export default Contact