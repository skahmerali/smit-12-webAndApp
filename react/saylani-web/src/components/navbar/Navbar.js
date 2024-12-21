import React from 'react'
import Button from '../button/Button';

export default function Navbar() {
    var firstName = "Ahmer";
    return (
        <div>
            <Button
                src="ahmer"
                name="clickyou"
            />
            <navbar>
                <ul>

                    <li>
                        Home {firstName}
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </navbar>
        </div>
    )
}
