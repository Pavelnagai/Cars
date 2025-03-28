import React from 'react'
import { Outlet } from 'react-router-dom'
import { useMe } from '../../shared/hooks/useMe'
import { Header } from "../../widget/header/header";

// import { useMobile, useTopSafeArea } from '@shared/lib/hooks'
// import { pxToRem } from '@shared/lib/pxToRem'

export const RootLayout: React.FC = () => {
	// useSubscriptionBalanceBoost()
	//
	// const { isIos } = useMobile()
	// useEffect(() => {
	// 	if (isIos) {
	// 		const htmlElement = document.querySelector('html')
	// 		const bodyElement = document.querySelector('body')
	// 		if (htmlElement) htmlElement.style.touchAction = 'pan-x pan-y'
	// 		if (bodyElement) bodyElement.style.touchAction = 'pan-x pan-y'
	// 	}
	// }, [isIos])

	// const { topSafeAreaOffset } = useTopSafeArea(12)
	// const { bottomSafeAreaOffset } = useTopSafeArea()
	// const [searchParams, _] = useSearchParams()
	//
	// const { androidOffset, desktopOffset } = useTopSafeArea()

	useMe()

	return (
		<div className="flex h-full flex-col overflow-x-hidden" id="wrap">
			<div
				// style={{
				// 	paddingTop: topSafeAreaOffset,
				// 	paddingBottom: bottomSafeAreaOffset,
				// }}
				className="flex flex-grow"
				id="content"
			>
				<Header />

				<main
					className="relative flex w-full flex-1 flex-col p-4 pt-[50px]"
					// style={{ paddingBottom: `${pxToRem(74 + androidOffset + desktopOffset)}rem` }}
				>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
