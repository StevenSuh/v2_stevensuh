import * as detailsDefs from 'src/scripts/modules/projectDetails/defs';

export const onScrollBar = function() {
  const detailsBgHeight = document.getElementById(detailsDefs.DETAILS_BG).scrollHeight;

  const maxScrollHeight = (document.body.clientHeight - window.innerHeight) - detailsBgHeight;
  const currentPosition = (window.scrollY || window.scrollTop || 0) - detailsBgHeight;

  this.setState({
    ...this.state,
    barPercentage: Math.max(currentPosition / maxScrollHeight, 0),
  });
};
