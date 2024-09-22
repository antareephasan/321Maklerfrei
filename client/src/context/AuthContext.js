import axios from "axios";
import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { config } from "../assets/config/config";
import ThemedSuspense from "../components/ThemedSuspense";

const apiUrl = config.api.url;

// create context
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [use, setUser] = useState(null);
  const [accessTok, setAccessToken] = useState(null);

  const [user, setUs] = useState(null);
  const [accessToken, setAccessTo] = useState(null);

  const data ={
    name: "John",
    lastname: "Doe",
    customerId: "C123456",
    email: "john.doe@example.com",
    emailError: false,
    emailErrorDescription: "",
    isEmailVerified: false,
    stripeId: "stripe_123456789",
    sepaClientSecret: "sepa_abcdefg",
    password: "Password1",
    role: "user",
    token: "your_generated_token_here"
}

 

  const refreshTokens = useCallback(() => {
    return axios
      .post(`${apiUrl}/v1/auth/refresh-tokens`, {})
      .then((response) => {
        setAccessToken(response.data.token);
        setUser(response.data.user);
        return response;
      })
      .catch((error) => {
        setUser(null);
        setAccessToken(null);
        return error;
      });
  }, []);

  console.log("=====", user)
  const startSilentRefresh = useCallback(() => {
    if (accessToken) {
      const tokenExpires = moment(user.expires);
      const tokenMaxAge = tokenExpires.diff(moment().add(1, "minutes"));
      setTimeout(() => {
        refreshTokens();
      }, tokenMaxAge);
    }
  }, [accessToken, refreshTokens]);

  const syncLogout = (event) => {
    if (event.key === "logout") {
      setAccessToken(null);
      setUser(null);
    }
  };

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        config.credentials = "include";
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  }, [accessToken]);

  useEffect(() => {
    refreshTokens().then((response) => {
      setLoaded(true);
    });
  }, [refreshTokens]);

  useEffect(() => {
    startSilentRefresh();
  }, [accessToken, startSilentRefresh]);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return function cleanup() {
      window.removeEventListener("storage", syncLogout);
    };
  }, []);

  const value = useMemo(() => {
    const register = (username, email, password, lastname) => {
      return axios
        .post(`${apiUrl}/v1/auth/register`, {
          name: username,
          email,
          password,
          lastname
        })
        .then((response) => {
          setAccessToken(response.data.token);
          setUser(response.data.user);
          startSilentRefresh();
        });
    };

    const login = (email, password) => {
      return axios
        .post(`${apiUrl}/v1/auth/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setAccessToken(response.data.token);
          setUser(response.data.user);
          startSilentRefresh();
        });
    };

    const logout = () => {
      setAccessToken(null);
      setUser(null);
      return axios
        .post(`${apiUrl}/v1/auth/logout`, {})
        .then((response) => {
          window.localStorage.setItem("logout", moment());
        })
        .catch((err) => {});
    };

    const forgotPassword = (email) => {
      return axios.post(`${apiUrl}/v1/auth/forgot-password`, {
        email: email,
      });
    };

    const resetPassword = (password, resetToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/reset-password?token=${resetToken}`,
        {
          password: password,
        }
      );
    };

    const verifyEmail = (emailVerificationToken) => {
      return axios.post(
        `${apiUrl}/v1/auth/verify-email?token=${emailVerificationToken}`,
        {}
      );
    };

    return {
      user,
      setUser,
      register,
      login,
      logout,
      forgotPassword,
      resetPassword,
      verifyEmail,
    };
  }, [user, startSilentRefresh]);

  if (!isLoaded) {
    return <ThemedSuspense />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
