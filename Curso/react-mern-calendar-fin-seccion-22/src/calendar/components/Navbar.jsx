import {useSelector} from 'react-redux'
import { useAthStore } from '../../hooks'


export const Navbar = () => {

  const {user} = useSelector(state =>state.auth) 
  const {startLogout} = useAthStore()
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
          {user.name}
        </span>

        <button className="btn btn-outline-danger" onClick={startLogout}>
            <i className="fas fa-sign-out-alt"></i>
            &nbsp;
            <span>Salir</span>
        </button>
    </div>
  )
}
