import * as sharedDefs from 'src/scripts/shared/defs';

import headerStyle from 'src/scripts/shared/header/style.module.css';

export const onScrollLanding = function() {
  const header = document.getElementById(sharedDefs.HEADER);

  if (!header) {
    return;
  }

  const currentPosition = window.scrollY || window.scrollTop;

  const { pathname } = this.props.location;
  const isLanding = pathname === '/';

  const distance = isLanding ? window.innerHeight : 350;
  const diff = isLanding ? 120 : 0;

  if (currentPosition >= (distance - diff)) {
    header.classList.add(headerStyle.scrolled);
  } else if (currentPosition >= (distance / 2)) {
    header.classList.remove(headerStyle.scrolled);
  } else {
    header.classList.remove(headerStyle.scrolled);
  }
};
