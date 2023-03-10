import React from 'react';

import Joke from './components/Joke'

function App () {
    return (
    <div>
        <Joke 
        setup="Why did the tomato turn red?"
        punchline="Because it saw the salad dressing!"
        />
        <Joke 
        setup="Why was the math book sad?"
        punchline="Because it had too many problems."
        />
        <Joke 
        setup="What do you call a fake noodle?"
        punchline="An impasta."
        />
        <Joke 
        setup="Why don't scientists trust atoms?"
        punchline="Because they make up everything."
        />
    </div>
    )
}

export default App