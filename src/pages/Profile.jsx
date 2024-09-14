import React from "react";
import { NavLink } from "react-router-dom";

function Profile() {
	return (
		<div className="flex items-center justify-center my-6">
			<NavLink to="/admin" className="p-2 bg-blue-600 text-gray-400">
				go to admin page
			</NavLink>
		</div>
	);
}

export default Profile;
