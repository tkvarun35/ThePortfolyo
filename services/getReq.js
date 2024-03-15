const getRequest = async (url, params = {}, method = "GET") => {
  if ("GET" === method) {
    url += "?" + new URLSearchParams(params).toString();
  }
  const response = await fetch(url);
  const data = await response.text();
  return data ? JSON.parse(data) : {};
};

export default getRequest;
