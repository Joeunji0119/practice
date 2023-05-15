import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Context } from './Context';
import Promise from './pages/Promise';

import Slider from './pages/Slider';
import Counter from './pages/Counter';
import Modal from './Components/Modal/Modal';
import Errors from './pages/Errors';
import Reducer from './pages/Reducer';
import { lazy, Suspense } from 'react';
import Loading from './pages/Loading';

const List = lazy(() => import('./pages/List'));
const Detail = lazy(() => import('./pages/Detail'));

// const Detail: any = lazy(() => {
// 	const promise1 = import('./pages/Detail');
// 	const promise2: Promise<void> = new Promise(() => setTimeout(resolve, 5000));

// 	return Promise.all([promise1, promise2]).then(
// 		([moduleExports]: any) => moduleExports.DetailPagew
// 	);
// });

const Router = () => {
	return (
		<BrowserRouter>
			<Context>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<List />} />
						<Route path='/count' element={<Counter />} />
						<Route path='/detail/:id' element={<Detail />} />
						<Route path='/promise' element={<Promise />} />
						<Route path='/Modal' element={<Modal />} />
						<Route path='/slider' element={<Slider />} />
						<Route path='/error' element={<Errors />} />
						<Route path='/reducer' element={<Reducer />} />
					</Routes>
				</Suspense>
			</Context>
		</BrowserRouter>
	);
};

export default Router;
// function resolve(): void {
// 	throw new Error('Function not implemented.');
// }
