/*
 * @param url String
 */
const fetchJSONP = (unique => url =>
  new Promise(resolve => {
    // INIT
    let script = document.createElement("script");
    let name = "_jsonp_" + unique++;

    url += name;

    script.src = url;
    window[name] = json => {
      resolve(json);
      script.remove();
      delete window[name];
    };

    document.body.appendChild(script);
  }))(0);

export default fetchJSONP;
