import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let specials = '!@#$%^&*={}[]~`';

    if (numberAllowed) characters += numbers;
    if (charAllowed) characters += specials;

    // Ensure at least one character type is selected
    if (!numberAllowed && !charAllowed) characters += numbers; // Default to numbers if neither is selected

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }

    setPassword(result);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className='container'>
      <h1 className='title'>Password Generator</h1>
      <input
        type="text"
        value={password}
        className='password-input'
        placeholder='Generated Password'
        readOnly
      />
      <button
        className='generate-button'
        onClick={generatePassword}
      >
        Generate New Password
      </button>
      <div className='checkbox-label'>
        <input
          type='checkbox'
          className='checkbox-input'
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
        />
        <span className='checkbox-text'>Include Numbers</span>
      </div>
      <div className='checkbox-label'>
        <input
          type='checkbox'
          className='checkbox-input'
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
        />
        <span className='checkbox-text'>Include Special Characters</span>
      </div>
    </div>
  );
}

export default App;
