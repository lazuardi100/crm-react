import axios from 'axios'
import {useState} from 'react';
import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const Logining = () =>{
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        axios.get('http://127.0.0.1:3000/auth/login_api',{
            params:{
                email: email,
                password: password
            }
        }).then(resppnse=>{
            const data = resppnse.data;
            if(data.success){
                navigate('/customers')
            }else{
                setError('Maaf akun salah')
            }
        })
        
    }
    return ( <>
        <div className="container">
            <div class="mb-3">
              <label for="" class="form-label">Masukkan email</label>
              <input type="email"
                class="form-control" name="" id="email" aria-describedby="helpId" placeholder=""/>
              
              <div class="mb-3">
                <label for="" class="form-label">Masukkan password</label>
                <input type="password" class="form-control" name="" id="password" aria-describedby="helpId" placeholder="" />
              </div>
              {error != ''? 
                <div>
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <strong>{error}</strong> 
                    </div>
                </div>: ''}
              <div class="d-grid gap-2">
                <button onClick={Logining} type="button" name="" id="" class="btn btn-primary">Login</button>
              </div>
            </div>
        </div>
    </> );
}

export default Login;