const getData = async (baseURL: string, endPoint?: string | number) => {
  try {
    const rawData = await fetch(`${baseURL}/${endPoint}`);
    const jsonData = await rawData.json();

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
