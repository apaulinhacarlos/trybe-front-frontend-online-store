import React from 'react';
import Button from '../components/Button';

class StarsRating extends React.Component {
  handleRate(event, rate) {
    event.preventDefault();
    this.setState({ rate });
  }

  render() {
    const {
      rate,
      onClick=null,
    } = this.props;
    return(
      <div>
        { Array.from({ length: 5}).map((_star, index) => {
            const starClass = (rate >= (index + 1) ? 'filled' : '');
            return (<Button
              key={`star-${index}`}
              type="button"
              className={ `material-icons star ${starClass}`}
              onClick={ (event) => onClick(event, (index + 1)) }
              title="star_outline" />);
          })
        }
      </div>
    
  ); 
  }
}

export default StarsRating;