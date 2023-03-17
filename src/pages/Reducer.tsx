import { useReducer } from 'react';

const Reducer = () => {
	function reducer(state: number, action: { type: string }) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
			// return throw new Error("unhandled action")
		}
	}

	const [num, dispatch] = useReducer(reducer, 0);
	// 초기값 0, 액션이 발생함에 따라서 상태가 바뀜

	const plus = () => {
		dispatch({
			type: 'INCREMENT',
		});
	};
	const minus = () => {
		dispatch({
			type: 'DECREMENT',
		});
	};

	return (
		<>
			<h1>{num}</h1>
			<button onClick={plus}>더하기</button>
			<button onClick={minus}>빼기</button>
		</>
	);
};

export default Reducer;
