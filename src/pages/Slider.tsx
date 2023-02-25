import { useEffect, useRef, useState } from 'react';

const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef(null);

	useEffect(() => {
		carouselRef.current.style.transform = `translate(-${activeIndex * 100}%)`;
	}, [activeIndex]);

	const items = [
		{
			id: 1,
			title: 'item1',
			img: 'https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg',
		},
		{
			id: 2,
			title: 'item2',
			img: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMG%20%EC%9B%94%EB%93%9C%20%EC%98%A4%EB%B8%8C%20%EC%96%B4%EB%93%9C%EB%B2%A4%EC%B2%98%20%EC%9E%85%EC%9E%A5%EA%B6%8C.jpg',
		},
		{
			id: 3,
			title: 'item3',
			img: 'https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg',
		},
		{
			id: 4,
			title: 'item4',
			img: 'https://cdn.pixabay.com/photo/2023/01/30/21/06/sea-7756602__480.jpg',
		},
	];

	const handleNextClick = () => {
		setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
	};

	const handlePrevClick = () => {
		setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex - 1);
	};
	return (
		<div>
			<div
				className='carousal'
				ref={carouselRef}
				style={{
					position: 'relative',
					width: '900px',
					height: '400px',
					background: 'pink',
					display: 'flex',
					flexDirection: 'row',
				}}>
				<div
					style={{
						position: 'relative',
						width: '100%',
						height: '100%',
						overflow: 'hidden',
					}}>
					{items.map(item => (
						<div
							className='carousel-item'
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%',
								// opacity: 0,
								transition: 'opacity 0.5s ease-in-out',
							}}
							key={item.id}>
							<h3>{item.title}</h3>
							<img src={item.img} />
						</div>
					))}
				</div>
				<button
					onClick={handlePrevClick}
					style={{
						position: 'absolute',
						top: '50%',
						transform: 'translateY(-50%)',
						width: '50px',
						height: '100px',
						backgroundColor: 'blue',
					}}>
					Prev
				</button>
				<button
					onClick={handleNextClick}
					style={{
						position: 'absolute',
						top: '50%',
						transform: 'translateY(50%)',
						width: '50px',
						height: '50px',
						backgroundColor: 'red',
					}}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Slider;
