import React from 'react';
import router from './router';
import Loader from './Loader';
import Sidebar from './Sidebar';
import Base from './ContentView/Base';
import setupBespoke from './setup-bespoke';

// TODO: move to util
const parseAttrs = (content) => {
  const res = {
    background: 'default',
    className : ''
  };

  if (content === undefined) return res;

  // background
  {
    const arr = content.match(/<!-- background: (.+) -->/);

    res.background = arr ? arr[1] : 'default';
  }

  // section-title
  if (content.match(/<!-- sectionTitle -->/)) {
    res.background = 'section-title';
    res.className = 'section-title';
  }

  return res;
};

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded   : false, // only use presenter mode
      opened   : false, // TODO: refactor to `status: {}`
      loader   : true,
      slideInfo: {
        total  : 0,
        current: 0
      }
    };

    this.setupBespokeFlag = false; // for lazy load
    this.slides = props.slides.map((slide) => ({
      meta   : parseAttrs(slide),
      context: slide
    }));

    const mode = router();

    if (mode === 'view') {
      import(/* webpackChunkName: 'presenter.view' */ './ContentView/View')
        .then((e) => {
          this.content = e.default;
          this.setState({ loaded: true });
          this.setupBespokeFlag = true;
          this.changeLoaderState();
        });
    }
    else if (mode === 'host') {
      import(/* webpackChunkName: 'presenter.host' */ './ContentView/Host')
        .then((e) => {
          this.content = e.default;
          this.setState({ loaded: true });
          this.setupBespokeFlag = true;
          this.changeLoaderState();
        });
    }
    else {
      this.changeLoaderState();
    }
  }

  componentDidMount() {
    if (router() === 'common') {
      this.setupBespoke();
    }

    setTimeout(() => {
      this.setState({
        slideInfo: {
          total  : `${this.slides.length}`.padStart(2, '0'),
          current: `${window.slide.bespoke.slide() + 1}`.padStart(2, '0')
        }
      });

      window.slide.bespoke.on('activate', () => {
        this.setState({
          slideInfo: {
            ...this.state.slideInfo,
            current: `${window.slide.bespoke.slide() + 1}`.padStart(2, '0')
          }
        });
      });
    }, 5000);
  }

  componentWillUpdate() {
    if (this.setupBespokeFlag) {
      this.setupBespoke();
      this.setupBespokeFlag = false;
    }
  }

  changeLoaderState = () => { // eslint-disable-line react/sort-comp
    window.onload = () => {
      setTimeout(() => this.setState({ loader: false }), 500);
    };
  }

  goTo = (num) => { // eslint-disable-line react/sort-comp
    window.slide.bespoke.slide(num);
  }

  onSetSidebarOpen = (opened) => {
    this.setState({ opened });
  }

  setupBespoke = () => {

    // hmmm.... I have no idea
    // because DOM tree must be built when calling setupBespoke.
    window.slide = {};
    window.slide.bespoke = setupBespoke(this.props.theme);
  }

  render() {
    return (
      <Sidebar
        goTo={this.goTo}
        opened={this.state.opened}
        onSetOpen={this.onSetSidebarOpen}
        slideInfo={this.state.slideInfo}
      >
        <Loader displayed={this.state.loader} />
        {
          this.content ?
            (
              <this.content
                slides={this.slides}
                loadedBespoke={!this.state.loader}
              />
            ) : (
              <Base slides={this.slides} />
            ) /* for common */
        }
        <i
          className="btn-sidebar fa fa-bars"
          onClick={() => this.onSetSidebarOpen(true)}
        />
      </Sidebar>
    );
  }
}

export default AppContainer;
