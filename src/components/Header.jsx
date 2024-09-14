import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";

function Header() {
	const { auth } = useSelector((store) => store.auth);
	console.log(auth.hoTen);
	const {
		auth: { deleteAuth },
	} = useDispatch();

	return (
		<header className="text-coolGray-800 max-w-full bg-black bg-opacity-40 p-4 text-white">
			<div className="container mx-auto my-0 flex h-16 justify-between">
				<NavLink
					to="/"
					aria-label="Back to homepage"
					className="flex items-center p-2"
				>
					<img
						src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
						alt="cyberlearn.vn"
					/>
				</NavLink>
				<ul className="hidden items-stretch space-x-3 lg:flex">
					<li className="flex">
						<NavLink
							to="/"
							className="-mb-0.5 flex items-center border-b-2 border-transparent border-violet-600 px-4 text-violet-600"
						>
							Home
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to="/contact"
							className="-mb-0.5 flex items-center border-b-2 border-transparent px-4 text-white"
							activeClassName="border-b-2 border-white"
						>
							Contact
						</NavLink>
					</li>
					<li className="flex">
						<NavLink
							to="/news"
							className="-mb-0.5 flex items-center border-b-2 border-transparent px-4 text-white"
							activeClassName="border-b-2 border-white"
						>
							News
						</NavLink>
					</li>
				</ul>
				{auth.hoTen ? (
					<ul className="flex items-center gap-4">
						<li>
							<NavLink to="profile">
								{auth.hoTen} <UserOutlined />
							</NavLink>
						</li>
						<button
							onClick={() => {
								localStorage.removeItem("auth");
								localStorage.removeItem("access_token");
								deleteAuth();
							}}
						>
							log out
						</button>
					</ul>
				) : (
					<ul className="flex items-center gap-4">
						<li>
							<NavLink to="login">Login</NavLink>
						</li>
						<li>
							<NavLink to="register">Signup</NavLink>
						</li>
					</ul>
				)}

				<button className="p-4 lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="text-coolGray-800 h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
		</header>
	);
}

export default Header;
