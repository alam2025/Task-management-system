import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const CreateTask = () => {
      const {
            control,
            handleSubmit,
            formState: { errors },
            reset
      } = useForm();

      const onSubmit = (data) => {
            console.log(data);
            reset()
      };

      return (
            <div>
                  <div className='flex justify-center gap-5 items-center '>
                       <Link to='/'> <button className=' btn'>Go to Home</button></Link>
                  <h1 className=" text-3xl font-semibold my-5">Create your task</h1>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-md mx-auto border rounded-md shadow-md">
                        <div className="mb-4">
                              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Task Title
                              </label>
                              <Controller
                                    name="title"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Task title is required' }} // Add validation rule for required field
                                    render={({ field }) => (
                                          <>
                                                <input {...field} type="text" className="mt-1 block w-full rounded-md border-gray-300 h-[40px] bg-slate-100 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>} {/* Display error message */}
                                          </>
                                    )}
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Task Description
                              </label>
                              <Controller
                                    name="description"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Task description is required' }} // Add validation rule for required field
                                    render={({ field }) => (
                                          <>
                                                <textarea {...field} rows="4" className="mt-1 block w-full rounded-md border-gray-300 bg-slate-100 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                                                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>} {/* Display error message */}
                                          </>
                                    )}
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                    Task Status
                              </label>
                              <Controller
                                    name="status"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Task status is required' }} // Add validation rule for required field
                                    render={({ field }) => (
                                          <>
                                                <select {...field} className="mt-1 block w-full rounded-md border-gray-300 h-[40px] bg-slate-100 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                      <option value="">Select One</option> {/* Add an empty option to force selection */}
                                                      <option value="pending">Pending</option>
                                                      <option value="completed">Completed</option>
                                                </select>
                                                {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>} {/* Display error message */}
                                          </>
                                    )}
                              />
                        </div>
                        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                              Submit
                        </button>
                  </form>
            </div>
      );
};

export default CreateTask;
