const getData = async (baseURL: string, endPoint?: string | number) => {
  try {
    let rawData;
    if (endPoint) {
      rawData = await fetch(`${baseURL}/${endPoint}`);
    } else {
      rawData = await fetch(baseURL);
    }
    const jsonData = await rawData.json();

    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
