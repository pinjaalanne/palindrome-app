import { useMemo, useState } from 'react';

function App(): JSX.Element {
  const [input, setInput] = useState<string>('');

  const isThisPalindrome = useMemo(() => {
    return input === input.split('').reverse().join('');
  }, [input]);

  const clearInput = (): void => {
    setInput('');
  };

  return (
    <main>
      <div className='palindromeCheck'>
        <h1>The Palindrome Checker</h1>
        <h2>Please enter a word to see if it is a palindrome or not!</h2>
        <form>
          <div>
            <input
              className='palindromeInput'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Enter a word'
            />
          </div>
        </form>
        <h3>Is it a Palindrome:</h3>
        {input === '' ? (
          <p className='palindromeResult'></p>
        ) : (
          <p className='palindromeResult'>{isThisPalindrome ? ' Yes it is!' : ' No it\'s not!'}</p>
        )}
        <button className='btn' onClick={clearInput}>Try again</button>
      </div>
    </main>
  );
}

export default App;