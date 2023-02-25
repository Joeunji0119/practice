import * as React from 'react';
import { useCallback, useReducer, useState, useRef } from 'react';
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

	const onchange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = e.target;

			const bundleInfo = {
				...info,
				[name]: value,
			};

			setInfo(bundleInfo);
		},
		[info]
	);

	/* 
   매번 함수가 새로 만들어지는 구조라면 최적화 하지 못함
   함수를 재사용하기 위해 useCallback 사용
   비슷한 예로 useMemo가 있음
  */

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
		setInfos(infos => [...infos, info]);
		setInfo({
			name: ' ',
			email: ' ',
		});
	};

	// 무한스크롤 공부
	const target = useRef<any>(null);
	const page = useRef<number>(1);

	const option: unknown = {
		root: null,
		rootMargin: '0px',
		threshold: [],
	};

	const getData = async (pageData: number) => {
		console.log(pageData);
		await fetch('https://reqres.in/api/users')
			.then(response => response.json())
			.then(result => {
				setDatas(prev => [...prev, ...result.data]);
			});
	};

	let callback = (entries: any) => {
		entries.forEach((entry: any) => {
			if (entry.isIntersecting) {
				let pageData = page.current++;
				getData(pageData);
			}
		});
	};

	let observer = new IntersectionObserver(callback, option);

	useEffect(() => {
		observer.observe(target.current);
		console.log('옵저버 연결');
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

			<div>
				{infos.map(
					({ name, email }: { name: string; email: string }, idx: number) => {
						return (
							<div key={idx}>
								{name} 과 {email}
							</div>
						);
					}
				)}
			</div>

			<button onClick={toPlus}>모달 플러스 버튼</button>
			{number}
			<button onClick={toMinus}>모달 마이너스 버튼</button>
			{datas?.map(({ id, first_name, email, avatar }, idx: number) => (
				<Link key={idx} to={`/detail/${id}`}>
					<p>
						<strong>{first_name}</strong>
					</p>
					<p>{email}</p>
					<img alt='avatar' src={avatar} />
				</Link>
			))}
			<div ref={target} style={{ width: '10vw', height: '10vh' }} />
		</>
	);
};

export default List;
