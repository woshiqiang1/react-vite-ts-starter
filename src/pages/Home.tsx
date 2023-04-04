import { Button } from 'antd'
import { useCounter } from '@/stores'
import { Link } from 'react-router-dom'
import styles from './home.module.scss'

const Home = () => {
	const { count, increase } = useCounter()

	return (
		<div className={styles['home-main']}>
			<Link to="/">Home</Link> | <Link to="/about">About</Link>
			<div className="text-red">count: {count}</div>
			<Button
				type="primary"
				onClick={() => {
					increase(5)
				}}
			>
				Add 5
			</Button>
		</div>
	)
}

export default Home
