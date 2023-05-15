// import { useEffect, useState } from 'react';

const Loading = () => {
	// const [showLoading, setShowLoading] = useState<boolean>(false);

	// useEffect(() => {
	// 	const timeId = setTimeout(() => {
	// 		setShowLoading(true);
	// 	}, 3000);
	// 	return () => clearTimeout(timeId);
	// }, [showLoading]);

	// console.log(showLoading);

	return (
		// showLoading &&
		<div
			style={{
				top: 50,
				width: '400px',
				height: '1000px',
				background: 'red',
				zIndex: 100,
			}}>
			Loading
		</div>
	);
};

export default Loading;
