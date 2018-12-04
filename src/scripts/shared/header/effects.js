import * as sharedDefs from 'src/scripts/shared/defs';

import headerStyle from 'src/scripts/shared/header/style.module.css';

export const onScrollLanding = function() {
  const header = document.getElementById(sharedDefs.HEADER);

  const currentPosition = window.scrollY || window.scrollTop;

  if (!header) {
    return;
  }

  if (currentPosition >= window.innerHeight) {
    header.classList.add(headerStyle.scrolled);
    header.classList.add(headerStyle.scrolledTwo);
  } else if (currentPosition >= (window.innerHeight - 120)) {
    header.classList.add(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  } else if (currentPosition >= (window.innerHeight / 2)) {
    header.classList.remove(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  } else {
    header.classList.remove(headerStyle.scrolled);
    header.classList.remove(headerStyle.scrolledTwo);
  }
};
