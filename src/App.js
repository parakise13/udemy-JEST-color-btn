import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  // /\B([A-Z])\B/g => 단어 가운데에서 대문자를 찾았을때마다 갯수에 상관없이 다음을 실행
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [ buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button style={{ backgroundColor: buttonDisabled ? 'gray' :buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={buttonDisabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={false}
        onChange={(e) => setButtonDisabled(e.target.checked)} />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
