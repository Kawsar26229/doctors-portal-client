import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success('Successfully Logged In');
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        toast.success('Successfully Logged In');
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[880px] flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register('email', { required: 'Email Address is required' })}
            />
            {errors.email && (
              <p className="text-red-600 mt-1">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters or longer',
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password?.message}</p>
            )}
            <label className="label">
              <Link to="/signup">
                <span className="label-text hover:underline">
                  Forget Password?
                </span>
              </Link>
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full"
            value="login"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="mt-3">
          New to Doctors Portal?{' '}
          <Link className="text-secondary" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          className="btn btn-outline w-full uppercase"
          onClick={signInWithGoogle}
        >
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
