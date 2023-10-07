**Swipeable Button React Component**

The Swipeable Button component provides a user interface element that can be swiped horizontally. You can use this component to trigger actions when the button is dragged to a specific position.

**Installation**  
You can install the Swipeable Button component using npm.
```bash 
npm install swipeable-button
```
**Usage**
1. Import the Component
Import the Swipeable Button component in your desired file.
``` javascript
import SwipeableButton from 'swipeable-button';
```
2. Usage in the Render Method
Place the Swipeable Button component within your component's render method.
```javascript
render() {
  return (
    <div>
      {/* Other components or content */}
      <SwipeableButton onDragEnd={this.handleDragEnd} />
    </div>
  );
}
```
3. Handling Drag End Event
Define a function to handle the drag end event and trigger an action when the button is dragged to the end.
```javascript
handleDragEnd = () => {
  // Implement your logic when dragging ends
  // This function will be called when the button is dragged to the end
  // Example: Navigate to a confirmation screen
  console.log('Navigating to the confirmation screen...');
};
```
4. Styling
Customize the appearance of the swipeable button using CSS. The provided CSS can be modified to suit your application's style.

```css
/* Modify this CSS to style the swipeable button as needed */
.swipeable-button {
  /* Your styles here */
}
```
5. Run the Application
Run your React application to see the swipeable button in action.
```bash
npm start
```
**Props**

onDragEnd (function, required): Function to be called when the dragging of the button ends.

**Example**

Here's a more detailed example of using the Swipeable Button component:

```javascript
import React from 'react';
import SwipeableButton from 'swipeable-button';

class MyComponent extends React.Component {
  handleDragEnd = () => {
    console.log('Dragging ended, take necessary action here.');
  };

  render() {
    return (
      <div>
        {/* Other components or content */}
        <SwipeableButton onDragEnd={this.handleDragEnd} />
      </div>
    );
  }
}

export default MyComponent;
```

**Working Screenshoots**

The button will look like this when unlocked.

![unlocked_swipeablebutton](https://github.com/msaqibjaved/SwipeableButton-JavaScript-React/assets/49585350/87d46017-0254-48e8-bf4d-644d521d7e91)

The button will look like this when locked or dragged completely.

![locked_swipeablebutton](https://github.com/msaqibjaved/SwipeableButton-JavaScript-React/assets/49585350/26db8310-6232-4e84-879c-7d69ddf16c73)


