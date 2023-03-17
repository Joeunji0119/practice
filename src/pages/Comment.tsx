import { useCallback, useReducer, useRef } from 'react';

const initalState = {
	inputs: {
		username: '',
		email: '',
	},
	users: [
		{
			id: 1,
			username: 'didi',
			email: 'didi@naver.com',
		},
		{
			id: 2,
			username: 'bibi',
			email: 'bibi@naver.com',
		},
		{
			id: 3,
			username: 'wiwi',
			email: 'wiwi@naver.com',
		},
	],
};

function reducer(state: any, action: any) {
	// console.log([action.name], action.value);

	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value,
				},
			};
		case 'CREATE_USER':
			return {
				inputs: initalState.inputs,
				// users:
				// state.users.concat(action.user)
			};
		default:
			throw new Error('에러');
	}
}

const Comment = () => {
	const [state, dispatch] = useReducer(reducer, initalState);
	const nextId = useRef(4);

	const { username, email } = state.inputs;

	const onchange = useCallback(
		(e: any) => {
			const { name, value } = e.target;
			dispatch({
				type: 'CHANGE_INPUT',
				name,
				value,
			});
		},
		[username, email]
	);

	const handleSubmit = useCallback(
		(e: any) => {
			e.preventDefault();
			dispatch({
				type: 'CREATE_USER',
				user: {
					id: nextId.current,
					username,
					email,
				},
			});
			nextId.current += 1;
		},
		[username, email]
	);

	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					value={username}
					name='username'
					onChange={e => onchange(e)}
					placeholder='이름'
				/>
				<input
					value={email}
					name='email'
					onChange={e => onchange(e)}
					placeholder='이메일'
				/>
				<button>제출</button>
			</form>

			<div>
				{initalState.users.map(
					(
						{ username, email }: { username: string; email: string },
						idx: number
					) => {
						return (
							<div key={idx}>
								{username} 과 {email}
							</div>
						);
					}
				)}
			</div>
		</>
	);
};

export default Comment;
