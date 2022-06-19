import { Category } from 'components/category/category.component';

import './directory.styles.scss';

export const Directory = ({ categories }) => (
	<div className='directory-container'>
		{categories.map(category => (
			<Category key={category.id} category={category} />
		))}
	</div>
);
