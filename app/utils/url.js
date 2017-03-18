function appendParams(url, params) {
  const query = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

  return `${url}?${query}`;
}

export default appendParams;
