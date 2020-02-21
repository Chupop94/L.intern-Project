export default class Redirect {
    
    //강제 페이지 접근시 로그인 페이지로 리다이렉트
    CheckRedirect() {
        if(window.sessionStorage.getItem(`pet`) === null) {
            window.location.href="/";
        }
    }
}
