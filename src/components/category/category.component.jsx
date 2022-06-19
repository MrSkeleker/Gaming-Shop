import './category.styles.scss';

export const Category = ({ category: { title, imageUrl } }) => (
	<div className='category-container'>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className='category-body-container'>
			<h2>{title}</h2>
			<p>Shop Now</p>
		</div>
	</div>
);
