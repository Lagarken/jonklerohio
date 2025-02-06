console.log("---- SERVER SCRIPT INJECTED ---");
console.log("adding GTAG");
const gtagScript = document.createElement('script');
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-DJDL65P9Y4';
document.head.appendChild(gtagScript);

// take out the /p/ from the pathname
var url = new URL(window.location.pathname.slice(3));
console.log(url);
console.log("hostname: " + url.hostname);
gtagScript.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-DJDL65P9Y4');
    console.log("GTAG added");
    console.log(window.location);
    function emit() {
        console.log("EMITTING EVENT" + `[p] ${url.hostname}`);
        gtag("event", "play_game", {
            gameID: "[p] " + url.hostname,
            location: window.location.hostname
        });
    }
    emit();
    setInterval(emit, 1000 * 60 * 10);
}


