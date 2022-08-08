import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAthStore } from '../../hooks';
import { useForm } from '../../hooks/useForm';
import './LoginPage.css';

const loginFormFields={
    loginEmail:'',
    loginPassword:'', 
}
const registeFormFields={
    registerName:       '',
    registerEmail:      '',
    registerPassword:   '', 
    registerPassword2:  '', 
}


export const LoginPage = () => {
    
    
        const {startLogin,errorMessage,startRegister} = useAthStore()

       const {loginEmail,loginPassword,onInputChange:onLoginInputChange,}= useForm(loginFormFields)

       const {registerName,registerEmail,registerPassword,registerPassword2,onInputChange:onRegisterInputChange}= useForm(registeFormFields)
    
       const loginSubmit =(e)=>{ 
            e.preventDefault()
            startLogin({email:loginEmail,contraseña:loginPassword})
        
       }

       const registerSubmit =(e)=>{ 
        e.preventDefault()
        if(registerPassword!== registerPassword2){
            Swal.fire('error en registro', 'contraseñas no iguales','error')
        }
        startRegister({name:registerName,email:registerEmail,contraseña:registerPassword})
   }

   useEffect(() => {
    
   
     
       if(errorMessage !== undefined){
        Swal.fire('error de authenticacion',errorMessage,'error')
       }
     
   }, [errorMessage])
   
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>


                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}