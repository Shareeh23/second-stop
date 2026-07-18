# Timer Challenge

A React-based timer challenge application where users try to stop a countdown as close as possible to the target time. The project demonstrates React concepts such as `useState`, `useRef`, `useEffect`, `forwardRef`, and `useImperativeHandle`.

## Features

- Multiple timer challenges with different difficulty levels
- Start and stop timer functionality
- Automatic timer completion handling
- Score calculation based on remaining time
- Result modal displaying user performance
- Timer cleanup to prevent memory leaks
- Uses native HTML `<dialog>` element for modal handling

## Technologies Used

- React
- JavaScript (ES6+)
- CSS
- HTML5 Dialog API
- Vite

## React Concepts Practiced

### useState

Used to manage the remaining timer value and trigger UI updates.

### useRef

Used for:
- Storing the interval ID without causing re-renders
- Accessing the modal component instance

### useEffect

Used for:
- Cleaning up intervals when the component unmounts
- Detecting when the timer reaches zero

### forwardRef

Used to pass a ref from the parent component (`TimerChallenge`) to the child component (`ResultModal`).

### useImperativeHandle

Used to expose custom methods from `ResultModal` to the parent component, allowing the parent component to trigger the modal opening.

## Project Structure

    src/
    │
    ├── components/
    │   ├── Player.jsx
    │   ├── TimerChallenge.jsx
    │   └── ResultModal.jsx
    │
    ├── App.jsx
    ├── main.jsx
    └── index.css

## Installation

Clone the repository:

    git clone <repository-url>

Navigate into the project:

    cd timer-challenge

Install dependencies:

    npm install

Start the development server:

    npm run dev

## How It Works

1. Each challenge receives a target time through props.

Example:

    <TimerChallenge 
      title="Easy" 
      targetTime={1} 
    />

2. When the user starts a challenge:
   - An interval starts counting down every 10 milliseconds.
   - The remaining time is stored in state.

3. When the user stops the timer:
   - The interval is cleared.
   - The result modal opens.
   - The score is calculated based on accuracy.

4. If the timer reaches zero:
   - The user loses.
   - The result modal opens automatically.

## Future Improvements

- Add animations for timer progress
- Add a leaderboard system
- Store best scores using local storage
- Add sound effects
- Add difficulty selection
- Improve mobile responsiveness

## License

This project is for learning and educational purposes.