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
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  // const data = {
  //   name: "John",
  //   lastname: "Doe",
  //   customerId: "C123456",
  //   email: "john.doe@example.com",
  //   emailError: false,
  //   emailErrorDescription: "",
  //   isEmailVerified: false,
  //   stripeId: "stripe_123456789",
  //   sepaClientSecret: "sepa_abcdefg",
  //   password: "Password1",
  //   role: "user",
  //   token: "your_generated_token_here"
  // }


  useEffect(() => {
    const fetchUser = async () => {

      const retrievedToken = localStorage.getItem("accessToken");
      const retrievedUser = localStorage.getItem("user");
      if (retrievedToken && retrievedUser) {
        try {
          const response = await axios.get(`${apiUrl}/user/profile`, {
            headers: { Authorization: `Bearer ${retrievedToken}` },
          });
          setUser(response.data.data);
          setAccessToken(retrievedToken); // Update state for consistency
          localStorage.setItem("accessToken", retrievedToken);
          localStorage.setItem("user", JSON.stringify(response.data.data));
        } catch (error) {
          // Handle error, possibly clear storage if token is invalid
          localStorage.removeItem("accessToken");
          localStorage.removeItem("user");
        }
      }
      setLoaded(true);
    };
    fetchUser();
  }, []);

  // const refreshTokens = useCallback(() => {
  //   // return axios
  //   //   .post(`${apiUrl}/v1/auth/refresh-tokens`, {})
  //   //   .then((response) => {
  //   //     setAccessToken(response.data.token);
  //   //     setUser(response.data.user);
  //   //     return response;
  //   //   })
  //   //   .catch((error) => {
  //   //     setUser(null);
  //   //     setAccessToken(null);
  //   //     return error;
  //   //   });
  // }, []);

  // console.log("===== user auth context:", user)

  // const fetchUser = useCallback(() => {
  //   if (accessToken) {

  //     axios.get(`${apiUrl}/user/profile`)
  //       .then((response) => {
  //         setUser(response.data.data);
  //         localStorage.setItem("user", response.data.data);
  //       })
  //   }
  // }, [accessToken]);

  // const startSilentRefresh = useCallback(() => {

  //   if (accessToken) {
  //     const tokenExpires = moment(user.expires);
  //     const tokenMaxAge = tokenExpires.diff(moment().add(1, "minutes"));
  //     setTimeout(() => {
  //       refreshTokens();
  //     }, tokenMaxAge);
  //   }
  // }, [accessToken, refreshTokens]);

  // const syncLogout = (event) => {
  //   if (event.key === "logout") {
  //     setAccessToken(null);
  //     setUser(null);
  //   }
  // };

  useEffect(() => {
    const interceptorId = axios.interceptors.request.use(
      (config) => {
        config.withCredentials = true;
        config.credentials = "include";
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
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

  // useEffect(() => {
  //   refreshTokens().then((response) => {
  //     setLoaded(true);
  //   });
  // }, [refreshTokens]);

  // useEffect(() => {
  //   startSilentRefresh();
  // }, [accessToken, startSilentRefresh]);

  // useEffect(() => {
  //   window.addEventListener("storage", syncLogout);
  //   return function cleanup() {
  //     window.removeEventListener("storage", syncLogout);
  //   };
  // }, []);

  const value = useMemo( () => {
    const register = (username, email, phone_number, password, confirmPassword, lastname, role) => {
      return axios
        .post(`${apiUrl}/auth/register`, {
          name: username,
          email,
          phone_number,
          password,
          confirmPassword,
          lastname,
          role
        })
        .then((response) => {
          console.log(response);
          // setAccessToken(response.data.token);
          // setUser(response.data.user);
          // startSilentRefresh();
        });
    };

    const login = (email, password) => {
      return axios
        .post(`${apiUrl}/auth/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setAccessToken(response.data.data.accessToken);
          setUser(response.data.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          localStorage.setItem("accessToken", response.data.data.accessToken);
        }).catch((error) => {
          console.log(error);
          throw error;
        });
    };


    const logout = () => {
      // return axios
      //   .post(`${apiUrl}/v1/auth/logout`, {})
      //   .then((response) => {
      // window.localStorage.setItem("logout", moment());
      localStorage.setItem("accessToken", null);
      localStorage.setItem("user", null);
      setAccessToken(null);
      setUser(null);
      // })
      // .catch((err) => { });
    };

    const forgotPassword = (email) => {
      return axios.post(`${apiUrl}/auth/forgot-password`, {
        email: email,
      });
    };

    const resetPassword = (password, resetToken) => {
      return axios.post(
        `${apiUrl}/auth/reset-password?token=${resetToken}`,
        {
          password: password,
        }
      );
    };

    const verifyEmail = (emailVerificationToken) => {
      return axios.post(
        `${apiUrl}/auth/verify-email?token=${emailVerificationToken}`,
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
  }, [user]);

  if (!isLoaded) {
    return <ThemedSuspense />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
