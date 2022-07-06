import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HeroeSerch } from '../../heroes/components/HeroeSerch';
import { AuthContext } from '../../auth/context';


export const Navbar = () => {
    const {user}= useContext(AuthContext)
    const {Logout}= useContext(AuthContext)
    

    const navigate = useNavigate()
    
    const onlogout =()=>{
        navigate('/loggin',{
            replace:true
        })
    Logout()
        }
   
    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                       className={({isActive})=>`nav-item nav-link ${isActive ?'active':''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                       className={({isActive})=>`nav-item nav-link ${isActive ?'active':''}`} 
                        to="/dc"
                    >
                        Dc
                    </NavLink>
                    <NavLink 
                       className={({isActive})=>`nav-item nav-link ${isActive ?'active':''}`} 
                        to="/serch"
                    >
                       <HeroeSerch></HeroeSerch>
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end" >
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>
                    <button className="nav-item nav-link btn"
                    onClick={onlogout}>
                     Logout
                    </button>
                   
                </ul>
            </div>
        </nav>
    )
}  