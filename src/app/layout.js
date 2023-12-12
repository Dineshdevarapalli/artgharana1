import './styles/reset.css'
import './styles/globals.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { PT_Sans, Open_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import QueryProvider from './utils/QueryProvider'
import Header from './components/header'
import Footer from './components/footer'

export const ptsans = PT_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-ptsans',
	weight: ['400', '700']
})
   
export const opensans = Open_Sans({
	subsets: ['latin'],
	variable: '--font-opensans',
	display: 'swap'
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${ptsans.variable} ${opensans.variable}`} suppressHydrationWarning={true}>
				<QueryProvider>
					<Header />
					{children}
					<Footer />
					<Toaster
						position="top-center"
						reverseOrder={false}
						gutter={12}
						containerClassName=""
						containerStyle={{}}
						toastOptions={{
							duration: 6000,
							style: {
								background: '#F2F6F9',
								color: '#212B40',
								fontWeight: '500',
								fontSize: '13px'
							}
						}}
					/>
				</QueryProvider>
			</body>
		</html>
	)
}