import { useContext, useState } from "react";
import {imageUpload} from "../../api/utils"
import {SaveUser} from "../../api/auth"
import {toast} from 'react-hot-toast'
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Signup = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [registerError, setRegisterError] = useState("");
   
    const navigate = useNavigate()
    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0]
        console.log(name, email, password, image );

        if (password.length < 6) {
            setRegisterError("Password Length should be 6 characters long");
            return;
        } else if (!/[!@#$%^&*()[\]{}|\\;:'"<>,.?/\-_+=]+/.test(password)) {
            setRegisterError("Error: Password should contain at least one special character.");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Error: Password should contain at least one uppercase character.");
            return;
        }

        try{
            const imageData = await imageUpload(image)
            const result = await createUser(email, password)
            await updateUserProfile(name, imageData?.data?.display_url)
            console.log(result);
            const dbResponse = await SaveUser(result?.user)
            console.log(dbResponse);
            navigate('/')
            toast.success('SignUp Successful')

        } catch(err){
            console.log(err);
            toast.error(err?.message)
        }
    }
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-white">
<h2 className="mb-3 text-3xl font-semibold text-center">Register to an Account</h2>
<p className="text-sm text-center dark:text-gray-400">Already have an account?
    <Link to={'/login'}>
    <span className="focus:underline hover:underline text-blue-600">Login here</span>
    </Link>
</p>
<div className="my-6 space-y-4">
    <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        <p>Login with Google</p>
    </button>
</div>
<div className="flex items-center w-full my-4">
    <hr className="w-full dark:text-gray-400" />
    <p className="px-3 dark:text-gray-400">OR</p>
    <hr className="w-full dark:text-gray-400" />
</div>
<form  onSubmit={handleSubmit} noValidate="" action="" className="space-y-8">
    <div className="space-y-4">
        <div className="space-y-2">
				<label htmlFor="name" className="block text-sm">Name</label>
				<input type="name" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			</div>

            <div className="space-y-4">
              <label htmlFor='image' className='block text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>





        <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">Email address</label>
            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
        <div className="space-y-2">
            <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
            </div>
            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        </div>
    </div>
    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign up</button>
</form>
{registerError && (
          <p className="text-red text-center mb-2">{registerError}</p>
        )}
</div>
    </div>
    );
};

export default Signup;