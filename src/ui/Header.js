import React from 'react';

import logo from '../components/images/logo.jpg';
function Header() {
	return (
		<header className="center">
			<img src={logo} alt="Logo" />
		</header>
	);
}

export default Header;
