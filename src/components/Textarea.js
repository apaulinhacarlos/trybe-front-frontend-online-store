import React from 'react';

class Textarea extends React.Component {
  render() {
    const {
      value,
      onChange,
      name,
      isRequired,
      labelValue = '',
      className,
      placeholder,
    } = this.props;

    return (
        <label>
          { labelValue }
         <textarea className={ className } value={ value } onChange={ onChange } name={ name } required={ isRequired } placeholder={ placeholder } rows="5" cols="50" />
        </label>
    );
  }
}

export default Textarea;
