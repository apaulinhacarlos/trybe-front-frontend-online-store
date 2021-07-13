import React from 'react';

class Input extends React.Component {
  render() {
    const {
      value,
      type,
      placeholder,
      onChange,
      name,
      isRequired,
      labelValue = '',
      className,
    } = this.props;

    return (
      <label>
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

export default Input;
