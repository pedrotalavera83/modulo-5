import React, {useEffect, useState} from 'react';
import NewsletterForm from './assets/componets/NewsletterForm';

function App2() {
    const [count, setCount] = useState(0)

    // useEffect(function, [])
    useEffect(
        () => {
            document.title = `(${count}) - Counter`
        },
        [count]
    )

    return (
        <>
        <header>
            <NewsletterForm id={'comp-1'}/>
            <button onClick={() => {
                setCount(count + 1)
            }}>+1</button>
            <p>{count}</p>
        </header>
        <br />
        <main>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nemo provident ipsum assumenda deleniti facere accusantium quas natus perferendis aliquid. Dolorum beatae voluptatibus eaque rem repellat vel quis. Inventore, labore.
        </main>
        <br />
        <footer>
            <NewsletterForm id={'comp-2'}/>
        </footer>
        </>

    )
}

export default App2