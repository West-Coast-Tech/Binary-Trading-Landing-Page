import { useState, useEffect } from 'react'

export const HorizontalBar = () => {
	const [progress, setProgress] = useState(12)

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				const delta = 30
				// Clamp the range between 12 and 90.
				const min = Math.max(12, prevProgress - delta)
				const max = Math.min(90, prevProgress + delta)
				// Generate a random integer between min and max (inclusive).
				const randomProgress = Math.floor(Math.random() * (max - min + 1)) + min
				return randomProgress
			})
		}, 1500)

		return () => clearInterval(interval)
	}, [])

	const redWidth = `${progress}%`
	const greenWidth = `${100 - progress}%`

	return (
		<div className="bg-transparent flex w-24 h-1 rounded-full absolute  items-center flex-row justify-between gap-1 ">
			{/* <span className="text-xs  bg-background  font-bold">{progress}%</span> */}
			<div
				style={{
					width: redWidth,
					transition: 'width 0.3s ease-in-out',
				}}
				className="h-1 bg-red-500 rounded-md"
			></div>
			<div
				style={{
					width: greenWidth,
					transition: 'width 0.3s ease-in-out',
				}}
				className="h-1 bg-green-500 rounded-md"
			></div>
			{/* <span className=" text-xs -mr-1 bg-background w-fit font-bold">
				{100 - progress}%
			</span> */}
		</div>
	)
}
