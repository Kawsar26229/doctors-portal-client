import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [createUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleSignUp = (data) => {
    setSignUpError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
        toast.success('User Created Successfully');
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('https://doctors-portal-server-five-mu.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  const signInWithGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User Created Successfully');
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h-[880px] flex justify-center items-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-96 p-7">
        <h2 className="text-xl text-center font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register('name', { required: 'Name is required' })}
            />
          </div>
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
              className="input input-bordered w-full max-w-xs mb-4"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
                  message: 'Password must be strong',
                },
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters or longer',
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600 mt-1">{errors.password?.message}</p>
            )}
          </div>
          {/* <div className="form-control w-full max-w-xs mb-6">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register('confirmPassword', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be 6 characters or longer',
                },
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 mt-1">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div> */}
          <input
            type="submit"
            className="btn btn-accent w-full"
            value="sign up"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3">
          Already Have an Account?{' '}
          <Link className="text-secondary" to="/login">
            Log In
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

export default SignUp;
