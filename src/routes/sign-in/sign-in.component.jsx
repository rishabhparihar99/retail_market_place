
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{

    const logGoogleUser =  async () =>{

        const response = await signInWithGooglePopup();
        console.log(response);
        /*{
          "user": {
              "uid": "gKR0tdgNKCYPuSxOD6y8zidGcAs2",
              "email": "rishabhpariharleela@gmail.com",
              "emailVerified": true,
              "displayName": "Rishabh Parihar",
              "isAnonymous": false,
              "photoURL": "https://lh3.googleusercontent.com/a-/AFdZucqEZ8ix5pgpzIvBJW1yT8GJowso9Zf2IZHTtlUD=s96-c",
              "providerData": [
                  {
                      "providerId": "google.com",
                      "uid": "110450702127463211770",
                      "displayName": "Rishabh Parihar",
                      "email": "rishabhpariharleela@gmail.com",
                      "phoneNumber": null,
                      "photoURL": "https://lh3.googleusercontent.com/a-/AFdZucqEZ8ix5pgpzIvBJW1yT8GJowso9Zf2IZHTtlUD=s96-c"
                  }
              ],
              "stsTokenManager": {
                  "refreshToken": "AOEOulZ35d78dKc4IbMRbtpGU2HOmEsuP90bqDz9Li08lDCwGLvelJzqQBMjDx6V1ftnJiJjX2njrTEucRiHx5PhKYDLKbH_jAUfaVlMiHpfnT-vmK-ZHCMWZLtBWc44pw_T-jm_NcmJOotofZcNUtCAhNwY8ehnWdlTkgY2iTWACKEPMVCEHI35oEOFGtKIJur5VhkoJ5UVGOydtZZg3y1ikjUNYubcyUTmh_Nh7wa0unmTPEo7PSj61c3RiZlIwOUSeu_jMjmumycJXBMDK4VoHbLeiZwFJm-7nNsGrlTtumCPtxzCoRLOc6loR-0Ikk7PVYsmdctgRZeC8k8WFYCIP9NZr04h6197DC6-u-HeQyX5Tr38nOYAFoCbVHgLelmW7EHRcrKjhdVmz0AoDEO3dRFcmCWFdoloqg-WPOiWacvUaYRuUPg0h-cDBi5DZEXq76I4m_lX",
                  "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyZmEwZjE2NmJmZjZiODU5N2FjMGFlMDRlNTllZmYxOTk1N2MyYmIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmlzaGFiaCBQYXJpaGFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNxRVo4aXg1cGdwekl2QkpXMXlUOEdKb3dzbzlaZjJJWkhUdGxVRD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9yZXRhaWwtbWFya2V0LXBsYWNlIiwiYXVkIjoicmV0YWlsLW1hcmtldC1wbGFjZSIsImF1dGhfdGltZSI6MTY2MjAzNzY1MiwidXNlcl9pZCI6ImdLUjB0ZGdOS0NZUHVTeE9ENnk4emlkR2NBczIiLCJzdWIiOiJnS1IwdGRnTktDWVB1U3hPRDZ5OHppZEdjQXMyIiwiaWF0IjoxNjYyMDM3NjUyLCJleHAiOjE2NjIwNDEyNTIsImVtYWlsIjoicmlzaGFiaHBhcmloYXJsZWVsYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDQ1MDcwMjEyNzQ2MzIxMTc3MCJdLCJlbWFpbCI6WyJyaXNoYWJocGFyaWhhcmxlZWxhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.wkXg949WjAx_PIGyG2NJklYJtFhpAMmy7ct1eKQicvl7zxhTcH8XCl89ZHkWOH7_3x_mT65ihFWs45rKeYSetHJOq9q3ZqYvfvWhlrQULJnY9RCBKeXn3n6beqjP6VqragkdVagcTJbrkzFjVUvSTI81WSWunBl6Tl5iq5QYtKYJsKKElXzMAWeCkcwiRH-luCj2BQ5iGvNBVoeoAFlvnBh12ReirirCGpS1eL59KFTfacqu71s6lUxbALaYSpGM-8K90Q1B_K7jc2-MZDQmdu360aaWYvh6NaDlWSpSyAziGA8j3rKq2N-TI0xCoUR0cqKuDSB-vt-6GZBon6_I7Q",
                  "expirationTime": 1662041251296
              },
              "createdAt": "1662037652657",
              "lastLoginAt": "1662037652657",
              "apiKey": "AIzaSyAdmDrPcbkISiHSPPLIUaHFDiAJVEXHRgA",
              "appName": "[DEFAULT]"
          },
          "providerId": "google.com",
          "_tokenResponse": {
              "federatedId": "https://accounts.google.com/110450702127463211770",
              "providerId": "google.com",
              "email": "rishabhpariharleela@gmail.com",
              "emailVerified": true,
              "firstName": "Rishabh",
              "fullName": "Rishabh Parihar",
              "lastName": "Parihar",
              "photoUrl": "https://lh3.googleusercontent.com/a-/AFdZucqEZ8ix5pgpzIvBJW1yT8GJowso9Zf2IZHTtlUD=s96-c",
              "localId": "gKR0tdgNKCYPuSxOD6y8zidGcAs2",
              "displayName": "Rishabh Parihar",
              "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUyZmEwZjE2NmJmZjZiODU5N2FjMGFlMDRlNTllZmYxOTk1N2MyYmIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiUmlzaGFiaCBQYXJpaGFyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNxRVo4aXg1cGdwekl2QkpXMXlUOEdKb3dzbzlaZjJJWkhUdGxVRD1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9yZXRhaWwtbWFya2V0LXBsYWNlIiwiYXVkIjoicmV0YWlsLW1hcmtldC1wbGFjZSIsImF1dGhfdGltZSI6MTY2MjAzNzY1MiwidXNlcl9pZCI6ImdLUjB0ZGdOS0NZUHVTeE9ENnk4emlkR2NBczIiLCJzdWIiOiJnS1IwdGRnTktDWVB1U3hPRDZ5OHppZEdjQXMyIiwiaWF0IjoxNjYyMDM3NjUyLCJleHAiOjE2NjIwNDEyNTIsImVtYWlsIjoicmlzaGFiaHBhcmloYXJsZWVsYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMDQ1MDcwMjEyNzQ2MzIxMTc3MCJdLCJlbWFpbCI6WyJyaXNoYWJocGFyaWhhcmxlZWxhQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.wkXg949WjAx_PIGyG2NJklYJtFhpAMmy7ct1eKQicvl7zxhTcH8XCl89ZHkWOH7_3x_mT65ihFWs45rKeYSetHJOq9q3ZqYvfvWhlrQULJnY9RCBKeXn3n6beqjP6VqragkdVagcTJbrkzFjVUvSTI81WSWunBl6Tl5iq5QYtKYJsKKElXzMAWeCkcwiRH-luCj2BQ5iGvNBVoeoAFlvnBh12ReirirCGpS1eL59KFTfacqu71s6lUxbALaYSpGM-8K90Q1B_K7jc2-MZDQmdu360aaWYvh6NaDlWSpSyAziGA8j3rKq2N-TI0xCoUR0cqKuDSB-vt-6GZBon6_I7Q",
              "context": "",
              "oauthAccessToken": "ya29.a0AVA9y1tHJ4mvq4IhWLzQnsVlvLj2hou1YcyPGBYMsxe8_XqJ4u838eYFGVGU15SYLAzCwCe4bLYvVY5RLz-ueXygmhoWz4FpddRgpJaYt0M5mP74MC50jrfeVtwMuwhvotp7oWd2qCKY1wMQtnqBdHQlXE4jaCgYKATASAQASFQE65dr8rsBSVcI5ZvfPSZZ4-hzb5g0163",
              "oauthExpireIn": 3599,
              "refreshToken": "AOEOulZ35d78dKc4IbMRbtpGU2HOmEsuP90bqDz9Li08lDCwGLvelJzqQBMjDx6V1ftnJiJjX2njrTEucRiHx5PhKYDLKbH_jAUfaVlMiHpfnT-vmK-ZHCMWZLtBWc44pw_T-jm_NcmJOotofZcNUtCAhNwY8ehnWdlTkgY2iTWACKEPMVCEHI35oEOFGtKIJur5VhkoJ5UVGOydtZZg3y1ikjUNYubcyUTmh_Nh7wa0unmTPEo7PSj61c3RiZlIwOUSeu_jMjmumycJXBMDK4VoHbLeiZwFJm-7nNsGrlTtumCPtxzCoRLOc6loR-0Ikk7PVYsmdctgRZeC8k8WFYCIP9NZr04h6197DC6-u-HeQyX5Tr38nOYAFoCbVHgLelmW7EHRcrKjhdVmz0AoDEO3dRFcmCWFdoloqg-WPOiWacvUaYRuUPg0h-cDBi5DZEXq76I4m_lX",
              "expiresIn": "3600",
              "oauthIdToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU4NDdkOTk0OGU4NTQ1OTQ4ZmE4MTU3YjczZTkxNWM1NjczMDJkNGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTYyMDIwNzkwMTMxLXZ1YzVtODdhaDQ4amMxdTA5aDZjMDBpMzFqZ3M2ajhtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTYyMDIwNzkwMTMxLXZ1YzVtODdhaDQ4amMxdTA5aDZjMDBpMzFqZ3M2ajhtLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTEwNDUwNzAyMTI3NDYzMjExNzcwIiwiZW1haWwiOiJyaXNoYWJocGFyaWhhcmxlZWxhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidDdwbHJleU1aSGd1N3FOQmNjbnFMZyIsImlhdCI6MTY2MjAzNzY1MiwiZXhwIjoxNjYyMDQxMjUyfQ.n-GLEyzCyvKY6WcwOGklFF7VDEDXkr51ZisbgDOA9It738HMQe0SaD4G5m1Oa3R96uiX1DuTyzN1g3Ue1-YJBT-NBe8lObhuWq_zuk-uPaU-6BUNASl3zllmPHHW9b1DG7Z7P0BVCqcNXXe7i0ySbwrKaTFb1cttmxzNTl05XzP_EUMxxqlqbbhRC5iBjmc9iiLlhMzQRfHy23wwRlUWDmBgUBDLE_FsfD8th0lv5r90CuCq1c1J15Tme6OIDQiDMGTEJjz72DZjowadUfbD44gyjSN7H9PvObqB-xxguN3WwjdwuJwtPO-QwW2dy5hJb_hN5tN4bJxmZPI7q6B_Sg",
              "rawUserInfo": "{\"name\":\"Rishabh Parihar\",\"granted_scopes\":\"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid\",\"id\":\"110450702127463211770\",\"verified_email\":true,\"given_name\":\"Rishabh\",\"locale\":\"en\",\"family_name\":\"Parihar\",\"email\":\"rishabhpariharleela@gmail.com\",\"picture\":\"https://lh3.googleusercontent.com/a-/AFdZucqEZ8ix5pgpzIvBJW1yT8GJowso9Zf2IZHTtlUD=s96-c\"}",
              "isNewUser": true,
              "kind": "identitytoolkit#VerifyAssertionResponse"
          },
          "operationType": "signIn"
      }
    
     */
    }
  return(
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>
              Sign in With Google Pop Up
        </button>
      </div>
  )

}


export default SignIn;