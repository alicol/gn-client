let APIURL = "";

switch (window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:<3000>';
        break;
    case 'https://ss-gn-client.herokuapp.com':
        APIURL = 'https://ss-gn-server.herokuapp.com'
}

export default APIURL;