import { useEffect } from 'react'
import { useUser } from '@/stores'

const About = () => {
	const { userInfo, getUserData } = useUser()

	useEffect(() => {
		setTimeout(() => {
			getUserData()
		}, 3000)
	}, [])

	return (
		<div>
			<div>About</div>
			<div>user: {userInfo.username}</div>
		</div>
	)
}

export default About
