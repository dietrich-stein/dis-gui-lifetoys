'use strict';

import PropTypes from 'prop-types';

import React from 'react';

import {Row, Label, Control} from './components';

export default class Text extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  render() {
    return (
      <Row>
        <Label>{this.props.label}</Label>
        <Control>
          <input
            type='text'
            value={this.state.value}
            readOnly={ this.props.readOnly }
            onChange={this.handleChange.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onKeyDown={this.onKeyDown.bind(this)}
            style={{
              color: (!this.props.readOnly) ? this.context.style.highlight : this.context.style.readOnly,
              font: this.context.style.font,
              backgroundColor: this.context.style.lowlight,
              padding: `${this.context.style.paddingY}px ${this.context.style.paddingX}px`,
              width: '100%',
              border: 'none',
              outline: 'none',
            }}>
          </input>
        </Control>
      </Row>
    )
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onKeyDown(e) {
    if(e.which === 13) {
      if (this.props.onFinishChange) {
        this.props.onFinishChange(e.target.value);
      }
    }
  }

  onBlur(e) {
    if (this.props.onFinishChange) {
      this.props.onFinishChange(e.target.value);
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

}

Text.propTypes = {
  readOnly: PropTypes.boolean,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFinishChange: PropTypes.func,
}

Text.contextTypes = {
  style: PropTypes.object
}
