import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import sharedStyle from 'src/scripts/shared/style.module.css';
import style from 'src/scripts/modules/app/style.module.css';

const AboutMe = () => (
  <div className={style.about_me}>
    <div className={classNames(style.about_container, sharedStyle.container)}>
      <div className={classNames(style.about_me_container, style.about_h2)}>
        <h1 className={style.about_h1}>
          Hi,
        </h1>
        {'My name is '}
        <a
          className={classNames(style.about_h2_my_name, sharedStyle.hover)}
          href="https://docs.google.com/document/d/1-CfxFemzyY_IsUhY0irR0GiQKViPq5nMqhG72oIPIcw/edit?usp=sharing"
          target="_blank"
        >
          Steven
        </a>
        {'.'}
        <br />
        {'I am currently at '}
        <a
          className={classNames(style.google_a, sharedStyle.hover)}
          href="https://www.google.com"
          target="_blank"
        >
          <span>G</span>
          <span>o</span>
          <span>o</span>
          <span>g</span>
          <span>l</span>
          <span>e</span>
        </a>
        {'.'}
        <br />
        {'I was previously at '}
        <Link
          className={classNames(style.affirm_a, sharedStyle.hover)}
          to="/work/affirm"
        >
          Affirm
        </Link>
        {', '}
        <Link
          className={classNames(style.amazon_a, sharedStyle.hover)}
          to="/work/amazon"
        >
          Amazon
        </Link>
        {', and '}
        <Link
          className={classNames(style.golinks_a, sharedStyle.hover)}
          to="/work/golinks"
        >
          GoLinks
        </Link>
        {'.'}
      </div>
    </div>
  </div>
);

export default AboutMe;
