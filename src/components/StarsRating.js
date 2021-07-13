import React from 'react';

class StarsRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rate: 0,
    }

    this.handleRate = this.handleRate.bind(this);
  }

  handleRate(event, rate) {
    event.preventDefault();
    this.setState({ rate });
  }

  render() {
    const { rate } = this.state;
    const { handleRate } = this;
    return(
      <div>
        {
         Array.from({ length: 5}).map((star, index) =>
         {
            const starClass = (rate >= (index + 1) ? 'filled' : '');
            return (<button
              key={`star-${index}`}
              className={ `material-icons star ${starClass}`}
              onClick={ (event) => handleRate(event, (index + 1)) }
              >
              star_outline
            </button>)
         })
         
        }
        
      </div>
    
  ); 
  }
}

export default StarsRating;