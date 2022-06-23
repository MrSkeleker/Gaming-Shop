import { Directory } from 'components/directory/directory.component';

import './home.styles.scss';

export const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'PC Games',
			imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		},
		{
			id: 2,
			title: 'Playstation Games',
			imageUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		},
		{
			id: 3,
			title: 'Xbox Games',
			imageUrl: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		},
		{
			id: 4,
			title: 'Special offers',
			imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
		},
		{
			id: 5,
			title: 'Other Games',
			imageUrl: 'https://images.unsplash.com/photo-1550921464-9f7a27f99edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
		},
	];

	return (<Directory categories={categories} />)
};
