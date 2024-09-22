import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.svg'
import ImageLight from '../assets/img/forgot-password-office.jpeg'
import ImageDark from '../assets/img/forgot-password-office-dark.jpeg'
import { AuthContext } from '../context/AuthContext'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function EmailVerificationForm() {
  const query = useQuery()
  const { verifyEmail } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(true)
  const [isEmailVerified, setEmailVerified] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const token = query.get("token") ? query.get("token") : ""
    verifyEmail(token)
    .then(response => {
      setEmailVerified(response.data.isEmailVerified)
      setLoading(false)
    })
    .catch(error => {
      if(error.response) {
        setError(error.response.data.message)
      } else {
        setError('Some error occured. Please try again.')
      }
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(isLoading) {
    return (
      <p className="text-sm font-medium text-gray-600">
        E-Mail wird verfiziert..
      </p>
    )
  }

  if(error) {
    return (
      <p className="text-sm font-medium text-red-600">
        {error}
      </p>
    )
  }

  if(!isEmailVerified) {
    return (
      <p className="text-sm font-medium text-red-600">
        Fehler bei der Verfizierung.
      </p>
    )
  }

  return (
    <p className="text-sm font-medium text-gray-600">
      Deine E-Mail wurde erfolgreich bestätigt. Logge dich ein, um fortzufahren.
    </p>
  )
}

function EmailVerification() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Link to="/" className="px-8 pt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
      <img src={logo} className="w-40" alt="My logo" />
      </Link>
      <div className="flex flex-1 h-full items-center mt-4 lg:mt-0 p-6">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img
                  aria-hidden="true"
                  className="object-cover w-full h-full dark:hidden"
                  src={ImageLight}
                  alt="Office"
                />
                <img
                  aria-hidden="true"
                  className="hidden object-cover w-full h-full dark:block"
                  src={ImageDark}
                  alt="Office"
                />
              </div>
              <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    E-Mail verfiziert
                  </h1>
                  
                  <EmailVerificationForm />

                  <hr className="my-8" />

                  <p className="mt-4">
                    <Link
                      className="text-sm font-medium text-blue-700 dark:text-gray-100 hover:underline"
                      to="/auth/login"
                    >
                      Du hast bereits einen Account? Login
                    </Link>
                  </p>

                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailVerification
