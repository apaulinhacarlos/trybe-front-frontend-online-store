import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.handleEmailValue = this.handleEmailValue.bind(this);
  }

  handleEmailValue({ target: { value } }) {
    this.setState({ email: value })
  }
  render() {
    const {  email } = this.state;
    const { handleEmailValue } = this;
    
    return (
      <section>
        <div>
          <h2>Avaliações</h2>
          <form>
            <Input type="email" value={ email } onChange={ handleEmailValue } />
          </form>
        </div>
      </section>
    );
  }
}

export default RatingForm;
