import React from 'react';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import StarsRating from '../components/StarsRating';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
    };
    this.handleValue = this.handleValue.bind(this);
  }

  handleValue({ target: { value, name } }) {
    this.setState({ [name]: value })
  }

  handleBtnClick(event) {
    event.preventDefault();
    console.log('Avaliei!');
  }

  render() {
    const {  email, message } = this.state;
    const { handleValue, handleBtnClick } = this;
    
    return (
      <section>
        <div>
          <h2>Avaliações</h2>
          <form className="rating-form">
            <Input type="email" value={ email } name="email" onChange={ handleValue } placeholder="Email" isRequired={ true } className="rating-input" />
            <StarsRating />
            <Textarea value={ message } name="message" onChange={ handleValue } placeholder="Mensagem (opcional)" isRequired={ false } className="rating-textarea" />
            <Button type="submit" onClick={ handleBtnClick } title="Avaliar" className="rating-btn" />
          </form>
        </div>
      </section>
    );
  }
}

export default RatingForm;
