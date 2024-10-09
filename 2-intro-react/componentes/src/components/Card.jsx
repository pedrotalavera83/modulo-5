import React from 'react'

function Card({ fullName, job, email }) {
    return (
        <li className="contact-card">
            <h2>{fullName}</h2>
            <dl>
                <dt>Job</dt>
                <dd>{job}</dd>
                <dt>Email</dt>
                <dd>{email}</dd>
            </dl>
        </li>
    )
}

export default Card