import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';

import './navigation.styles.scss';
import { NAVBAR_LINKS, ROUTES } from 'utils/navigation.config';

export const Navigation = () => {
	return (
		<Fragment>
			<nav className='navigation'>
				<Link className='logo-container' to={ROUTES.home.path}>
					<Logo />
				</Link>
				<div className='nav-links-container'>
					{NAVBAR_LINKS.map(link => (
						<Link key={link.path} className='nav-link' to={link.path}>
							{link.label}
						</Link>
					))}
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
};
