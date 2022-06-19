import { Directory } from 'components/directory/directory.component';

import './homepage.styles.scss';

export const Homepage = ({ categories }) => (
	<Directory categories={categories} />
);
