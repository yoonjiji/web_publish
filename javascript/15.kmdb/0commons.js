export async function kmdb(type, value, title) {
  const seviceKey = `8B18FUBK818J58GO0NG8`;
  let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${type}=${value}&title=${title}&ServiceKey=${seviceKey}`;

  let api = await fetch(url);
  let jsonData = await api.json();

  console.log(url);

  return jsonData;
}
