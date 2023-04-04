import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type State = {
	count: number
}

type Action = {
	increase: (step: number) => void
}

const useCounter = create<State & Action>()(
	devtools(
		persist(
			(set) => {
				return {
					count: 0,
					increase(step) {
						set((state) => {
							return {
								count: state.count + step
							}
						})
					}
				}
			},
			{
				name: 'counter-storage'
			}
		)
	)
)

export { useCounter }
