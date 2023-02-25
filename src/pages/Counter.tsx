import { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState<number>(0);

	const handleOnClick = () => {
		setCount(prev => prev + 1);
	};

	console.log('useEffect 전');

	useEffect(() => {
		console.log('실행');
		return () => console.log('-------cleanUP--------');
	}, [count]);

	console.log('useEffect 다음');

	return (
		<div>
			<div>{count}</div>
			<button onClick={handleOnClick}> button </button>
		</div>
	);
};

export default Counter;
