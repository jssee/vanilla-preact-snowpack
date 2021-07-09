import { h } from 'preact';
import { style } from '@vanilla-extract/css';

const styles = style({
  color: 'tomato',
});

function App() {
  return (
    <div className="App">
      <header className={styles}>
        <h1>pls work</h1>
      </header>
    </div>
  );
}

export default App;
