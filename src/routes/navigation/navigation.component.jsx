import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {ReactComponent as Logo} from 'assets/svg/logo.svg';

import './navigation.styles.scss';

export const Navigation = () => {
	return (
		<Fragment>
			<nav className='navigation'>
				<Link className='logo-container' to='/'>
					<Logo />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='shop'>
						SHOP
					</Link>
                    <Link className='nav-link' to='sign-in'>
						SIGN IN
					</Link>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};
