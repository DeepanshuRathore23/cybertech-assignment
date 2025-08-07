'use client';

import {ExclamationCircleIcon} from '@heroicons/react/24/outline';
import { useActionState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { authenticate } from '../lib/actions';

export default function LoginPage() {
  const searchParams =  useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/updateEvents';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );


  return (
    <div className="mt-[25vh] h-[70vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#d59f0f] mb-6">Login</h2>
        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d59f0f]"
              name='email'
              placeholder='Enter your email address'
              required
            />            
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d59f0f]"
              name='password'
              placeholder='Enter password'
              required
            />
          </div>

          <input type="hidden" name='redirectTo' value={callbackUrl} />
          <button
            type="submit"
            className="w-full bg-[#d59f0f] text-white py-3 rounded-lg font-semibold hover:bg-black transition-all duration-300"
            aria-disabled={isPending}
          >
            Log In
          </button>

          <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        </form>
      </div>
    </div>
  );
}
