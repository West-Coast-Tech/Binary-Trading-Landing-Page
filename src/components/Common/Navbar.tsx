import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { OffcanvasLayout, PopoverLayout } from '..'

//images
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'
import avatar8 from '@/assets//images/avatars/img-8.jpg'

//icons
import {
	AddUserSvg,
	ChatCheckSvg,
	HomeSvg,
	LikeSvg,
	MailAttechSvg,
	NotificationSvg,
	ProfileSvg,
	ProjectSvg,
	ReportSvg,
	SettingSvg,
	SettingSvg2,
	SignOutSvg,
	SupportSvg,
	TaskSvg,
} from '@/constants/svgIcons'
import { useToggle } from '@/hooks'

interface NotificationData {
	icon: ReactNode
	title: string
	time: string
	variant: string
}

const notifications: NotificationData[] = [
	{
		icon: <AddUserSvg />,
		title: 'New User Registered',
		time: '2 min ago',
		variant: 'bg-blue-600/10',
	},
	{
		icon: <ChatCheckSvg />,
		title: 'A new comment on your post',
		time: '3 min ago',
		variant: 'bg-orange-400/10 text-orange-400',
	},
	{
		icon: <MailAttechSvg />,
		title: 'A new comment on your post',
		time: '5 min ago',
		variant: 'bg-green-400/10 text-green-400',
	},
	{
		icon: <LikeSvg />,
		title: 'A new comment on your post',
		time: '8 min ago',
		variant: 'bg-red-400/10 text-red-400',
	},
]
const NotificationDropdown = () => {
	const PopoverToggle = () => {
		return (
			<Link to="">
				<span className="h-full hover:text-primary">
					<NotificationSvg />
				</span>
			</Link>
		)
	}
	return (
		<li className="nav-item">
			<PopoverLayout
				placement="bottom"
				toggler={<PopoverToggle />}
				togglerClass="nav-link after:absolute hover:after:-bottom-10 after:inset-0"
			>
				<div
					id="landingDropdownMenu"
					className="w-max mt-2 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 fc-dropdown-open:flex flex-col gap-1.5"
				>
					{(notifications || []).map((notification, idx) => {
						return (
							<div className="nav-item" key={idx}>
								<Link className="nav-link p-3 hover:bg-slate-100" to="">
									<div className="mb-2 flex items-center -ms-1.5">
										<span
											className={`${notification.variant} flex justify-center items-center w-8 h-8 shadow rounded me-3`}
										>
											{notification.icon}
										</span>
										<div className="flex-grow-1">
											<p className="text-xs/none">{notification.title}</p>
											<span className="text-gray-400 text-xs">
												<small>{notification.time}</small>
											</span>
										</div>
									</div>
								</Link>
							</div>
						)
					})}
					<div className="w-full bg-slate-100 inline-flex items-center justify-center text-sm text-gray-800 py-1.5 px-3">
						View All
					</div>
				</div>
			</PopoverLayout>
		</li>
	)
}
const ProfileDropdown = () => {
	const PopoverToggle = () => {
		return (
			<Link to="">
				<div className="flex items-center">
					<div className="shrink">
						<div className="h-8 w-8 me-2">
							<img
								src={avatar8}
								className="avatar h-full w-full rounded-full me-2"
							/>
						</div>
					</div>
					<div className="hidden lg:block grow ms-1 leading-normal">
						<span className="block text-sm font-medium">Greeva N</span>
						<span className="block text-gray-400 text-xs text-left">Admin</span>
					</div>
				</div>
			</Link>
		)
	}

	return (
		<li className="nav-item">
			<PopoverLayout
				placement="bottom"
				toggler={<PopoverToggle />}
				togglerClass="nav-link after:absolute hover:after:-bottom-10 after:inset-0"
			>
				<div
					id="innerPageDropdownMenu"
					className="mt-2 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5"
				>
					<div className="nav-item rounded hover:bg-slate-100 transition-all">
						<Link className="nav-link !p-2" to="">
							<ProfileSvg />
							Profile
						</Link>
					</div>
					<div className="nav-item rounded hover:bg-slate-100 transition-all">
						<Link className="nav-link !p-2" to="">
							<SettingSvg2 />
							Settings
						</Link>
					</div>
					<div className="nav-item rounded hover:bg-slate-100 transition-all">
						<Link className="nav-link !p-2" to="">
							<SupportSvg />
							Support
						</Link>
					</div>
					<hr className="-mx-2 my-2" />
					<div className="nav-item rounded hover:bg-slate-100 transition-all">
						<Link className="nav-link !p-2" to="">
							<SignOutSvg />
							Sign Out
						</Link>
					</div>
				</div>
			</PopoverLayout>
		</li>
	)
}

const Navbar = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isOpenOffcanvas, toggleOffcanvas, openOffcanvas, closeOffcanvas] =
		useToggle(false)

	return (
		<>
			<header className="@@link-color fixed top-0 inset-x-0 flex items-center z-40 w-full bg-white transition-all py-3.5">
				<div className="container">
					<nav className="flex items-center">
						{/* Navbar Brand Logo */}
						<Link to="/">
							<img src={logoDark} className="h-8 logo-dark" alt="Logo Dark" />
							<img
								src={logoLight}
								className="h-8 logo-light"
								alt="Logo Light"
							/>
						</Link>
						{/* Nevigation Menu */}
						<div className="hidden lg:block mx-auto grow">
							<ul
								id="navbar-navlist"
								className="grow flex flex-col lg:flex-row lg:items-center lg:justify-center mt-4 lg:mt-0"
							>
								<li className="nav-item pe-4">
									<Link
										className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-primary"
										to="/"
									>
										<span className="shrink-0 me-2">
											<HomeSvg />
										</span>
										<span className="grow">Home</span>
									</Link>
								</li>
								<li className="nav-item pe-4">
									<Link
										className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-gray-700 hover:text-primary transition-all"
										to="/pages/dashboard"
									>
										<span className="shrink-0 me-2">
											<ProjectSvg />
										</span>
										<span className="grow">Projects</span>
									</Link>
								</li>
								<li className="nav-item pe-4">
									<Link
										className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-gray-700 hover:text-primary transition-all"
										to="/pages/dashboard"
									>
										<span className="shrink-0 me-2">
											<TaskSvg />
										</span>
										<span className="grow">Tasks</span>
									</Link>
								</li>
								<li className="nav-item pe-4">
									<Link
										className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-gray-700 hover:text-primary transition-all"
										to="/pages/dashboard"
									>
										<span className="shrink-0 me-2">
											<ReportSvg />
										</span>
										<span className="grow">Reports</span>
									</Link>
								</li>
								<li className="nav-item pe-4">
									<Link
										className="nav-link flex items-center font-medium py-2 px-4 lg:py-0 text-gray-700 hover:text-primary transition-all"
										to="/pages/setting"
									>
										<span className="shrink-0 me-2">
											<SettingSvg />
										</span>
										<span className="grow">Settings</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="block grow ms-auto lg:shrink me-4 lg:me-0">
							<ul className="navbar-nav flex gap-x-3 items-center justify-end lg:justify-center">
								{/* Home Page Dropdown */}
								<NotificationDropdown />
								{/* Inner Page Dropdown */}
								<ProfileDropdown />
							</ul>
						</div>
						{/* Moblie Menu Toggle Button (Offcanvas Button) */}
						<div className="lg:hidden flex items-center ms-auto px-2.5">
							<button type="button" onClick={toggleOffcanvas}>
								<i className="fa-solid fa-bars text-2xl text-gray-500" />
							</button>
						</div>
					</nav>
				</div>
			</header>
			<OffcanvasLayout
				open={isOpenOffcanvas}
				sizeClassName="w-[447px] bg-white border-e"
				placement="end"
				toggleOffcanvas={closeOffcanvas}
			>
				<div className="flex flex-col h-[100vh] divide-y-2 divide-gray-200">
					{/* Mobile Menu Topbar Logo (Header) */}
					<div className="p-6 flex items-center justify-between">
						<Link to="/">
							<img src={logoDark} className="h-8" alt="Logo" />
						</Link>
						<button
							data-fc-dismiss
							className="flex items-center px-2"
							onClick={closeOffcanvas}
						>
							<i className="fa-solid fa-xmark text-xl" />
						</button>
					</div>
					{/* Mobile Menu Link List */}
					<div className="p-6 overflow-scroll h-full">
						<ul
							className="navbar-nav flex flex-col gap-2"
							data-fc-type="accordion"
						>
							{/* Home Page Link */}
							<li className="nav-item">
								<Link to="/" className="nav-link">
									<span className="shrink-0 me-2">
										<HomeSvg />
									</span>
									<span className="grow">Home</span>
								</Link>
							</li>
							{/* Home Page Link */}
							<li className="nav-item">
								<Link to="/pages/dashboard" className="nav-link">
									<span className="shrink-0 me-2">
										<ProjectSvg />
									</span>
									<span className="grow">Projects</span>
								</Link>
							</li>
							{/* Home Page Link */}
							<li className="nav-item">
								<Link to="/pages/dashboard" className="nav-link">
									<span className="shrink-0 me-2">
										<TaskSvg />
									</span>
									<span className="grow">Tasks</span>
								</Link>
							</li>
							{/* Home Page Link */}
							<li className="nav-item">
								<Link to="/pages/dashboard" className="nav-link">
									<span className="shrink-0 me-2">
										<ReportSvg />
									</span>
									<span className="grow">Reports</span>
								</Link>
							</li>
							{/* Home Page Link */}
							<li className="nav-item">
								<Link to="/pages/setting" className="nav-link">
									<span className="shrink-0 me-2">
										<SettingSvg />
									</span>
									<span className="grow">Settings</span>
								</Link>
							</li>
						</ul>
					</div>
					{/* Mobile Menu User (Footer) */}
					<div className="px-6 py-4 flex items-center">
						<button className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">
							Downloadsss
						</button>
					</div>
				</div>
			</OffcanvasLayout>
			{/* =========== Mobile Menu End =========== */}
		</>
	)
}

export default Navbar
