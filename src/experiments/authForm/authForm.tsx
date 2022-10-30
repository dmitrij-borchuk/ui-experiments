import React, { useState } from 'react'

export const AuthForm = () => {
  const [mode, setMode] = useState<'signIn' | 'signUp' | 'reset'>('signIn')

  return (
    <div className="flex flex-col w-96 text-xl font-sans font-bold px-2">
      <div className="flex text-gray-300">
        <button
          className={`font-bold ${mode === 'signIn' && 'text-white'}`}
          onClick={() => setMode('signIn')}
        >
          SIGN IN
        </button>
        <button
          className={`ml-4 font-bold ${mode === 'signUp' && 'text-white'}`}
          onClick={() => setMode('signUp')}
        >
          SIGN UP
        </button>
        <button
          className={`ml-auto font-bold ${mode === 'reset' && 'text-white'}`}
          onClick={() => setMode('reset')}
        >
          RESET
        </button>
      </div>

      {/* Inputs */}
      <div
        className="flex flex-col mt-5 gap-2 transition-all duration-300 overflow-hidden pt-1"
        style={{ height: `${mode2height[mode]}px` }}
      >
        <div className="flex flex-col">
          {/* Pointer */}
          <div
            className={`transition-transform duration-300`}
            style={{ transform: mode2pointerTransform[mode] }}
          >
            <div
              className={`h-4 w-4 bg-white rotate-45 -mb-2 transition-transform duration-300`}
            ></div>
          </div>
          <input
            placeholder="Email"
            className=" font-bold rounded-md h-12 p-3"
          />
        </div>
        <input
          placeholder="Password"
          className=" font-bold rounded-md h-12 p-3"
        />
        <input
          placeholder="Repeat password"
          className=" font-bold rounded-md h-12 p-3"
        />
      </div>

      <button className="bg-blue-400 mt-2 text-white h-12 rounded-md overflow-hidden  font-bold">
        <div
          className="transition-transform duration-300"
          style={{ transform: mode2submitTransform[mode] }}
        >
          <div className="h-12 flex items-center justify-center">
            Reset password
          </div>
          <div className="h-12 flex items-center justify-center">Sign in</div>
          <div className="h-12 flex items-center justify-center">Sign up</div>
        </div>
      </button>
    </div>
  )
}

const mode2height = {
  signIn: 116,
  signUp: 172,
  reset: 60,
}

const mode2submitTransform = {
  reset: 'translate(0px, 0px)',
  signIn: 'translate(0px, -48px)',
  signUp: 'translate(0px, -96px)',
}

const mode2pointerTransform = {
  signIn: 'translate(30px, 0px)',
  signUp: 'translate(122px, 0px)',
  reset: 'translate(330px, 0px)',
}
