import { useAuth0 } from "@auth0/auth0-react";
import { Auth0Config } from "Config/Constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenError, fetchTokenSuccess } from "Store/token/token.slice";

export const useToken = () => {
  const { getAccessTokenSilently, user, isAuthenticated } = useAuth0();
  const [isLoading, setLoading] = useState(false);
  const [userMetadata, setUserMetadata] = useState(null);
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  const token = useSelector<any, string>((state) => state.token.token);

  const logoutFun = () => {
    localStorage.removeItem("token");
    logout({ returnTo: window.location.origin });
  };

  const loginFun = () => loginWithRedirect();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: Auth0Config.AUDIENCE,
          scope: "read:current_user",
        });

        // get user details "google-oauth2|105274519430373074032"
        const userDetailsByIdUrl = `https://${Auth0Config.DOMAIN}/api/v2/users/${user?.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
        // set token in state
        dispatch(fetchTokenSuccess(accessToken));
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: accessToken,
            message: "new access token",
          })
        );
        setLoading(true);
      } catch (e: any) {
        setLoading(false);
        dispatch(fetchTokenError(e));
      }
    })();
  }, [getAccessTokenSilently, isLoading, user?.sub]);

  return {
    isLoading,
    token,
    logoutFun,
    loginFun,
    userMetadata,
  };
};
