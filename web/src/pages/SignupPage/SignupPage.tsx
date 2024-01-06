import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  EmailField,
  FieldError,
  TextField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
      firstName: data.name,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" description="Setup page" />
      <HeaderWithRulers className="mb-6 text-white" heading="Sign up" />
      <Form onSubmit={onSubmit} className="auth-form">
        <div className="field relative">
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <TextField
            name="name"
            placeholder=""
            errorClassName="error"
            validation={{
              required: {
                value: true,
                message: 'Name is required',
              },
            }}
          />
          <FieldError name="name" className="error-message" />
        </div>
        <div className="field relative">
          <Label name="email" errorClassName="error">
            Email
          </Label>
          <EmailField
            name="email"
            placeholder=""
            errorClassName="error"
            ref={emailRef}
            validation={{
              required: {
                value: true,
                message: 'Email is required',
              },
            }}
          />
          <FieldError name="email" className="error-message" />
        </div>

        <div className="field relative">
          <ShowHidePassword
            label="password"
            name="password"
            errorClassName="error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <FieldError name="password" className="error-message" />
        </div>

        <div className="field">
          <button type="submit">Submit</button>
        </div>
      </Form>
      <div className="auth-links">
        <Link to={routes.login()}>Ready to Login</Link>
      </div>
    </>
  )
}

export default SignupPage
