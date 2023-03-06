import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import { Context } from './Context';
import Promise from './pages/Promise';
import App from './pages/App';
import Slider from './pages/Slider';
import Counter from './pages/Counter';
import Modal from './Components/Modal/Modal';
import Errors from './pages/Errors';

const Router = () => {
	return (
		<BrowserRouter>
			<Context>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/count' element={<Counter />} />
					<Route path='/detail/:id' element={<Detail />} />
					<Route path='/promise' element={<Promise />} />
					<Route path='/Modal' element={<Modal />} />
					<Route path='/slider' element={<Slider />} />
					<Route path='/error' element={<Errors />} />
				</Routes>
			</Context>
		</BrowserRouter>
	);
};

export default Router;
