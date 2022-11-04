const getData = async (url: string, target: string | number) => {
  try {
    const rawData = await fetch(url + target);
    const jsonData = await rawData.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
