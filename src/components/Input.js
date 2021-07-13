import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      value,
      type,
      placeholder,
      onChange,
      name,
      isRequired,
      labelValue,
      className,
    } = this.props;

    return (
      <label htmlFor={ name }>
        { labelValue }
        <input
          className={ className }
          name={ name }
          value={ value }
          type={ type }
          placeholder={ placeholder }
          onChange={ (e) => onChange(e) }
          required={ isRequired }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  labelValue: '',
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  labelValue: PropTypes.string,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
