import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Register() {
	return (
		<div className='Register'>
			<h1>Register</h1>
			<i className='pi pi-key' style={{ fontSize: '4em' }}></i>
			<Card>
				<div className='App'>
					<div className='p-field p-grid'>
						<label className='p-col-' style={{ width: '100px' }}>
							Full Name
						</label>
						<div className='p-col'>
							<InputText id='fullname' type='text' />
						</div>
					</div>
					<div className='p-field p-grid'>
						<label className='p-col-' style={{ width: '100px' }}>
							Email Address
						</label>
						<div className='p-col'>
							<InputText id='email' type='email' />
						</div>
					</div>
					<div className='p-field p-grid'>
						<label className='p-col-' style={{ width: '100px' }}>
							Password
						</label>
						<div className='p-col'>
							<InputText id='password' type='text' />
						</div>
					</div>
					<div className='p-field p-grid'>
						<label className='p-col-' style={{ width: '100px' }}>
							Confirm Password
						</label>
						<div className='p-col'>
							<InputText id='confirm' type='text' />
						</div>
					</div>
				</div>
				<Button label='Register' />
			</Card>
		</div>
	);
}

export default Register;
