import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

export default function ProtectedRoute(props) {
	const { user } = useContext(AuthContext)
  const { component: Component, ...remProps } = props;

  return (
	<Route 
    	{...remProps} 
		render={remProps => (
			!user ?
				<Component {...remProps} /> :
				<Redirect to='/auth' />
        )} 
    />
	);
}
