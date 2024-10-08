import React, { useId, useState } from "react";

function NewsletterForm({id}) {
    const [email, setEmail] = useState('');
    const idHook = useId();
    const inputId = `${idHook}-email`;
    return (
        <form>
            <label htmlFor={inputId}>Registrate a nuestro newsletter</label>
            <input
                type='email'
                name='email'
                id={inputId}
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
        </form>
    );
}

export default NewsletterForm;
