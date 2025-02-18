import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase/index';


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault()
        const result = await createUserWithEmailAndPassword(auth, email, password)

            // we can use try catch for integrat and getting response 
            // try { 
            //     const result = await createUserWithEmailAndPassword(auth, email, password)

            // }
            // catch (err) {

            // }


            .then((data) => {
                // Signed in
                const user = data.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <main>
            <section>
                <div>
                    <div>
                        <h1> FocusApp </h1>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>

                        </form>

                        <p>
                            Already have an account?{' '}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup;