import React from 'react';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import StarsRating from '../components/StarsRating';
import Comment from '../components/Comment';

class RatingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      rate: 0,
      comments: [],
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleRate = this.handleRate.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleValue({ target: { value, name } }) {
    this.setState({ [name]: value })
  }

  handleBtnClick(event) {
    event.preventDefault();
    const { email, message, rate } = this.state;
    if (email.length !== 0) {
      this.setState((prevState) => {
        const comment = { email, message, rate };
        const newComments = prevState.comments.length > 0 ? [...prevState.comments, comment] : [comment];
        return ({ comments: newComments });
      });
    }
  }

  handleRate(event, rate) {
    event.preventDefault();
    this.setState({ rate });
  }

  render() {
    const {  email, message, rate, comments } = this.state;
    const { handleValue, handleBtnClick, handleRate } = this;
    return (
      <section className="rating-section">
          <h2>Avaliações</h2>
          <form className="rating-form">
            <div>
              <Input type="email" value={ email } name="email" onChange={ handleValue } placeholder="Email" isRequired={ true } className="rating-input" />
              <StarsRating rate={ rate } onClick={ handleRate } />
            </div>
            <Textarea value={ message } name="message" onChange={ handleValue } placeholder="Mensagem (opcional)" isRequired={ false } className="rating-textarea" />
            <Button type="submit" onClick={ handleBtnClick } title="Avaliar" className="rating-btn" />
          </form>
          { comments.length > 0 && (
            <section className="rating-comments-section">{
              comments.map((comment) => {
                const {
                  rate,
                  email,
                  message,
                  } = comment;
                return (<Comment rate={ rate } email={ email } comment={ message } className="rating-comment" />);
              })
            }</section>
          )}
     </section>
    );
  }
}

export default RatingForm;
