export const fetchData = async () => {
  try {
    const response = await fetch("https://www.aquadeals.in/admin/web2/user/getdealOffers");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};