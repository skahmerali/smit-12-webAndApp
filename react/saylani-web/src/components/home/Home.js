import React from 'react';
import Button from '../button/Button';

export default function Home() {
    return (
        <div>
            Hello saylani
            <Button
                src="Ali"
                name="click me"
                obj={{ awesome: "yes", disabled: "no" }}
            />
        </div>
    )
}
