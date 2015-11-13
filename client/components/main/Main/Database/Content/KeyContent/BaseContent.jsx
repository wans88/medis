'use strict';

import React from 'react';

class BaseContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  init(keyName) {
    throw new Error('should be overrided');
  }

  componentDidMount() {
    this.init(this.props.keyName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.keyName !== this.props.keyName) {
      this.init(nextProps.keyName);
    }
  }
}

export default BaseContent;