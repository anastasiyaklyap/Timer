import style from './Time.module.scss';

const Time = ({ time }) => {
	const humanTime = (ms) => {
		return new Date(ms).toISOString().slice(11, 21);
	};
	return <div className={style.time}>{humanTime(time)}</div>;
};

export default Time;
