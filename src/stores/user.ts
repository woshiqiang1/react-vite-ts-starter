import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { fetchAccount } from '@/api'

type State = {
	userInfo: {
		username: string
		password: string
	}
}

type Action = {
	getUserData: () => void
}

const useUser = create<State & Action>()(
	devtools(
		immer((set, get) => {
			return {
				userInfo: {
					username: 'UNKNOWN',
					password: ''
				},
				getUserData: async () => {
					const res = await fetchAccount()
					const { username, password } = res.data
					set((state) => {
						state.userInfo.username = username
					})
				}
			}
		})
	)
)

export { useUser }
