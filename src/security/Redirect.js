export default class Redirect {
    
    CheckRedirect() {
        if(window.sessionStorage.getItem(`pet`) === null) {
            window.location.href="/";
        }
    }
}
