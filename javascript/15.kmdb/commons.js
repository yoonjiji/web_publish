/*
    KMDB API 호출
*/
export async function kmdb(type, value, title) {
  const seviceKey = `8B18FUBK818J58GO0NG8`;
  //   const seviceKey = `59H5F0U0OFQB3R2261VM`;
  //   let url = `http://api.koreafilm.or.kr/openapi-data2/`;
  //   url += `wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y`;
  //   url += `&${type}=${value}&title=${title}`;
  //   url += `&ServiceKey=${seviceKey}`;

  let url = `https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&${type}=${value}&title=${title}&ServiceKey=${seviceKey}`;

  let api = await fetch(url);
  let jsonData = await api.json();

  return jsonData;
}
