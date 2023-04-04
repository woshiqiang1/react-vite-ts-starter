import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode, Suspense } from 'react'
import Routes from '@/routes'
import '@/styles/global.scss'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
	<StrictMode>
		<BrowserRouter>
			<Suspense fallback={<h2>loading...</h2>}>
				<Routes />
			</Suspense>
		</BrowserRouter>
	</StrictMode>
)
