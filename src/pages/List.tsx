import { useReducer, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetData } from '../Context';

const reducer = (state: number, action: { type: string }) => {
	switch (action.type) {
		case 'PLUS':
			return state + 1;
		case 'MINUS':
			return state - 1;
		default:
			throw new Error('unhandle action');
	}
};

const List = () => {
	const { datas, setDatas } = useGetData();
	const [number, dispatch] = useReducer(reducer, 0);
	const [info, setInfo] = useState({
		name: '',
		email: '',
	});

	const [infos, setInfos] = useState([
		{
			name: 'didi',
			email: 'didi@naver.com',
		},
		{
			name: 'bibi',
			email: 'bibi@naver.com',
		},
		{
			name: 'wiwi',
			email: 'wiwi@naver.com',
		},
	]);

	const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const bundleInfo = {
			...info,
			[name]: value,
		};

		setInfo(bundleInfo);
	};

	const toPlus = () => {
		dispatch({
			type: 'PLUS',
		});
	};

	const toMinus = () => {
		dispatch({
			type: 'MINUS',
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInfos([...infos, info]);
		setInfo({
			name: ' ',
			email: ' ',
		});
	};

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(response => response.json())
			.then(result => setDatas(result.data));
	}, []);

	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					value={info.name}
					name='name'
					onChange={e => onchange(e)}
					placeholder='이름'
				/>
				<input
					value={info.email}
					name='email'
					onChange={e => onchange(e)}
					placeholder='이메일'
				/>
				<button>제출</button>
			</form>

			{infos.map(
				({ name, email }: { name: string; email: string }, idx: number) => {
					return (
						<div key={idx}>
							{name} 과 {email}
						</div>
					);
				}
			)}

			<button onClick={toPlus}>모달 플러스 버튼</button>
			{number}
			<button onClick={toMinus}>모달 마이너스 버튼</button>
			{datas?.map(({ id, first_name, email, avatar }) => (
				<Link key={id} to={`/detail/${id}`}>
					<p>
						<strong>{first_name}</strong>
					</p>
					<p>{email}</p>
					<img alt='avatar' src={avatar} />
				</Link>
			))}
		</>
	);
};

export default List;
