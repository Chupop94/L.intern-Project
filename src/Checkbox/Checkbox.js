import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

class MyCheckbox extends React.Component {
    state = {
      checked: false
    };
  
    handleChange = (e) => {
      const { target: { checked } } = e;
      this.setState({ checked });
    };
  
    render() {
      return (
        <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
        />
      );
    }
  }