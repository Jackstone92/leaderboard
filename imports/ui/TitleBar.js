import React from 'react';

// Prop Types NPM update from deprication //
import PropTypes from 'prop-types';


class TitleBar extends React.Component {

  renderSubtitle() {
    if(this.props.subtitle) {
      return(
        <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>
      );
    }
  }

  render() {
    return(
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}


TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  // title: 'Default Title'
};



export default TitleBar;
