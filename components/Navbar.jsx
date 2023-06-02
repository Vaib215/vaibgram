import {FaBell} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-xl">
      <div >
        <a className="btn btn-ghost normal-case text-xl font-serif">Vaibgram</a>
      </div>
      <div className="ml-auto gap-2">
        <div className="mx-auto form-control navbar-center">
          <input type="search" placeholder="🔍 Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <button className="ml-auto btn btn-ghost btn-circle">
          <FaBell size={24}/>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="//picsum.photos/64" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar