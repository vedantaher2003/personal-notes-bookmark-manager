import axios from "axios";
import cheerio from "cheerio";


export const fetchTitle = async (url) => {
const { data } = await axios.get(url);
const $ = cheerio.load(data);
return $("title").text();
};
