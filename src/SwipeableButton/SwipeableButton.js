import React, { Component } from 'react';
import './SwipeableButton.css';



export default class SwipeableButton extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.container = React.createRef();
    this.state = {
      unlocked: false,
      initialPosition: null,
      isDragging: false,
      newPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handleDrag);
    document.addEventListener('touchmove', this.handleDrag);
    document.addEventListener('mouseup', this.endDrag);
    document.addEventListener('touchend', this.endDrag);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleDrag);
    document.removeEventListener('touchmove', this.handleDrag);
    document.removeEventListener('mouseup', this.endDrag);
    document.removeEventListener('touchend', this.endDrag);
  }

  getText() {
    return 'Place order'; 
  }

  startDrag = (event) => {
    event.preventDefault();

    const initialPosition = event.clientX || event.touches[0].clientX;

    this.setState({
      initialPosition,
      isDragging: true
    });
  };

  handleDrag = (event) => {
    const { initialPosition, isDragging, newPosition } = this.state;
    if (isDragging && (event.clientX || event.touches[0].clientX)) {
      const currentPosition = event.clientX || event.touches[0].clientX;
      const difference = currentPosition - initialPosition;
      const newPosition = Math.max(0, difference);

      this.setState({
        newPosition
      });

      if (this.slider.current) {
        this.slider.current.style.transform = `translateX(${newPosition}px)`;
      }
    }
  };

  endDrag = () => {
    const { isDragging, newPosition } = this.state;
    const { containerWidth, sliderWidth, onConfirmation } = this.props; 

    if (isDragging) {
      this.setState({
        isDragging: false
      });
    }
  };
  

  render() {
    const { newPosition } = this.state;

    return (
      <div className='ReactSwipeButton'>
        <div
          className={`rsbContainer ${this.state.unlocked ? 'rsbContainerUnlocked' : ''}`}
          ref={this.container}
        >
          <div
            className='rsbcSlider'
            ref={this.slider}
            onMouseDown={this.startDrag}
            onTouchStart={this.startDrag}
            style={{ background: this.props.color, transform: `translateX(${newPosition}px)` }}
          >
            <span className='rsbcSliderText'>{this.getText()}</span>
            <span className='rsbcSliderArrow'></span>
            <span className='rsbcSliderCircle' style={{ background: this.props.color }}></span>
          </div>
          <div className='rsbcText'>{this.getText()}</div>
        </div>
      </div>
    );
  }
}
