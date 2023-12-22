import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="max-w-screen-xl mx-auto">
     <div className="h-screen p-3 space-y-2 w-60 bg-gray-400">
	<div className="flex items-center p-2 space-x-4">
		{user && <div>
            <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">{user.displayName}</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">View profile</a>
			</span>
		</div>
            </div>}
	</div>
	<div className="divide-y dark:divide-gray-700">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
			<Link to={'/'}>
            <li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					<span>Home</span>
				</a>
			</li>
            </Link>
			<li>
            <NavLink
                    to={"/dashboard/addTask"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-gray-200"
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <span >Add Task</span>
                  </NavLink>
			</li>
			<li>
            <NavLink
                    to={"taskList"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-gray-200"
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <span >Task List</span>
                  </NavLink>
			</li>
            <li>
            <NavLink
                    to={"toDo"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-gray-200"
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <span >To do</span>
                  </NavLink>
			</li>
			<li>
            <NavLink
                    to={"completedTask"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-gray-200"
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <span >Completed Task</span>
                  </NavLink>
			</li>
			<li>
            <NavLink
                    to={"ongoingTask"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2 space-x-3 rounded-md bg-gray-200"
                        : "flex items-center p-2 space-x-3 rounded-md"
                    }
                  >
                    <span >OnGoing</span>
                  </NavLink>
			</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					
					<span>Settings</span>
				</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					
					<span>Logout</span>
				</a>
			</li>
		</ul>
	</div>
</div>
        </div>
    );
};

export default Dashboard;