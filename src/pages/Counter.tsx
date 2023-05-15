import { useEffect } from 'react';

const Counter = () => {
	// const [count, setCount] = useState<number>(0);

	// const handleOnClick = () => {
	// 	return value2 => {
	// 		console.log(value2);
	// 		// setCount(prev => prev + 1);
	// 	};
	// };

	// const test = handleOnClick(value2);

	console.log('useEffect 전');

	useEffect(() => {
		console.log('실행');
		return () => console.log('-------cleanUP--------');
	}, []);

	console.log('useEffect 다음');

	return (
		<div>
			{/* <div>{count}</div> */}
			{/* <button onClick={test('test')}> button </button> */}
		</div>
	);
};

export default Counter;
