import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Signup() {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
      {/* make modal visible by adding modal + modal-open */}
      <div className="modal modal-open">
        <div className="modal-box max-w-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* use Link as the close control (no nested button) */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

          <h3 className="font-bold text-lg">Signup</h3>
          {/* fullname */}
          <div className="mt-4 space-y-2">
            <span>Full Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("fullName", { required: true })}
            />
            <br />
            {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
            
          </div>
          {/* email field */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          {/* password field */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Signup
            </button>
            <p>
              Already Registered?{" "}
              <Link to="/" className="text-blue-500 underline cursor-pointer">
                Login
              </Link>
            </p>
          </div>
         </form>
        </div>
      </div>
    </>
  );
}

export default Signup;