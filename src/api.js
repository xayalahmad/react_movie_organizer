import config from "./config.json";
const save = async (request) => {
  const response = await fetch("http://localhost:3200/favorite", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  }
  throw new Error(await response.text());
};

const get = async (id) => {
  const url = new URL(id, "http://localhost:3200/favorite/");
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("You dont have any favourite films!");
  }
  return await response.json();
};

const getFilms = async (searchString) => {
  const url = new URL(config.apiUrl);
  url.searchParams.set("s", searchString);
  url.searchParams.set("apikey", config.apiKey);

  const response = await fetch(url.toString()).then((r) => r.json());

  if (response.Error) {
    throw new Error(response.Error);
  }

  return response;
};

const api = { save, get, getFilms };
export default api;
