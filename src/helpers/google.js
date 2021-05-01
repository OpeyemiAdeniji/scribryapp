let google = {};

google.onSignIn = (googleUser) => {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token);
}

export default google;