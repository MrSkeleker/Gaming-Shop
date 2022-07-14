import { useState } from 'react';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from 'utils/firebase.utils';
import { Button } from 'components/button/button.component';
import { FormInput } from 'components/form-input/form-input.component';

import './sign-up-form.styles.scss';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { password, confirmPassword, displayName, email } = formFields;

	const handleChange = event => {
		const { name, value } = event.target;
		setFormFields(formFields => ({ ...formFields, [name]: value }));
	};

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('password is not the same');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert(`Can't create user. Email already in use`);
			}
			console.log('User creation encountered an error', error);
		}
	};

	const resetFormFields = () => setFormFields(defaultFormFields);

	return (
		<div className="sign-up-container">
            <h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Display Name'
					inputOptions={{
						type: 'text',
						name: 'displayName',
						onChange: handleChange,
						value: displayName,
						required: true,
					}}
				/>
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
				<FormInput
					label='Confirm Password'
					inputOptions={{
						type: 'password',
						name: 'confirmPassword',
						onChange: handleChange,
						value: confirmPassword,
						required: true,
					}}
				/>
				<Button type='submit'>Sign up</Button>
			</form>
		</div>
	);
};
