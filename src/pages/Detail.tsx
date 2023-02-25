import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DataType, useGetData } from '../Context';

const Detail = React.memo(function Detail() {
	const params = useParams();
	const [user, setUser] = useState<DataType>();
	const { datas } = useGetData();

	useEffect(() => {
		const [filter] = datas.filter(
			({ id }: { id: number }) => id === Number(params.id)
		);
		setUser(filter);
	}, [params.id, datas]);

	return (
		<section>
			<article>
				<img alt='avatar' src={user?.avatar} />
				<p>
					<strong>{user?.first_name}</strong>
				</p>
				<p>{user?.email}</p>
			</article>
		</section>
	);
});

export default React.memo(Detail);
