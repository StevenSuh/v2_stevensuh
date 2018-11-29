import React from 'react';

import Header from 'src/scripts/shared/header';
import MainAnimation from './components/mainAnimation';

import * as defs from './defs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(
      this.setState.bind(this),
      defs.INITIAL_DURATION,
      { isLoading: false },
    );
  }

  render() {
    return (
      <div>
        <Header isLanding={true} />
        <MainAnimation />
      </div>
    );
  };
}

export default App;
