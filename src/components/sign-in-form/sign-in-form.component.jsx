import { useState } from 'react';

import { Button } from 'components/button/button.component';
import { FormInput } from 'components/form-input/form-input.component';

import './sign-in-form.styles.scss';
import {
	createUserDocumentFromAuth,
	signInUserWithEmailAndPassword,
	signInWithGooglePopup,
} from 'utils/firebase.utils';

const defaultFormFields = {
	email: '',
	password: '',
};

export const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { password, email } = formFields;

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields(formFields => ({ ...formFields, [name]: value }));
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async event => {
		event.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			const userDocRef = await createUserDocumentFromAuth(user);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('incorrect credentials');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const resetFormFields = () => setFormFields(defaultFormFields);

	return (
		<div className='sign-in-container'>
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					inputOptions={{
						type: 'email',
						name: 'email',
						onChange: handleChange,
						value: email,
						required: true,
					}}
				/>
				<FormInput
					label='Password'
					inputOptions={{
						type: 'password',
						name: 'password',
						onChange: handleChange,
						value: password,
						required: true,
					}}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign in</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						Sign in with Google
					</Button>
				</div>
			</form>
		</div>
	);
};
