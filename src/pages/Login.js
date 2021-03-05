import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';

function Login() {
	return (
		<div>
			<h1>Login</h1>
			<i className='pi pi-sign-in' style={{ fontSize: '3em' }}></i>
			<Card>
				<div className='App'>
					<div className='p-field p-grid'>
						<label className='p-col-fixed' style={{ width: '100px' }}>
							Username
						</label>
						<div className='p-col'>
							<InputText id='username' type='text' />
						</div>
					</div>
					<div className='p-field p-grid'>
						<label className='p-col-fixed' style={{ width: '100px' }}>
							Password
						</label>
						<div className='p-col'>
							<InputText id='password' type='text' />
						</div>
					</div>
				</div>
				<div className='p-col-12'>
					<Checkbox inputId='cb1' value='checkbox'></Checkbox>
					<label htmlFor='cb1' className='p-checkbox-label'>
						Remember Me
					</label>
				</div>
				<Button label='Log in' />
			</Card>
		</div>
	);
}

export default Login;
