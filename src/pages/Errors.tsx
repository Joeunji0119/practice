async function test(value: number) {
	if (!value) throw new Error('someError');
	return value;
}

const Errors = () => {
	const caller = () => {
		console.log('첫번째 콘솔');
		test(1).catch(err => console.log(err));

		console.log('두번째 콘솔');
	};

	caller();
	return <div>동기 비동기 순서 확인용</div>;
};

export default Errors;
