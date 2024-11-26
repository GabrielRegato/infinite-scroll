export const fetchCatFacts = async (page: number) => {
  const response = await fetch(`https://catfact.ninja/facts?page=${page}`);
  const data = await response.json();
  return {
    records: data.data.map((fact: { fact: string }) => fact.fact),
    current_page: data?.current_page,
    last_page: data?.last_page,
  };
};

export const fetchRandomUser = async (index: number) => {
  const response = await fetch(`https://randomuser.me/api?index=${index}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.results[0];
};
