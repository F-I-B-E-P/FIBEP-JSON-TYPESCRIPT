import { Article } from "../../types/Article";

const http = require('http');
const encode = require('../modules/transformers/encode');
const decode = require('../modules/transformers/decode');

const READ_ARTICLE_PATH = "../../assets/articles/complete_article.json"
const WRITE_ARTICLE_PATH = "../../assets/articles/basic_article2.json";
const SCHEMA_PATH = "../../assets/schemas/schema.json";

const getArticleFromFile = async () => {
    const article: Article = await decode.fromFile(READ_ARTICLE_PATH, SCHEMA_PATH);

    return article;
}

const saveArticleToFile = async (article: Article) => {
    const articleInStringFormat: string = encode.toString(article);

    await encode.toFile(WRITE_ARTICLE_PATH, articleInStringFormat);
}

http.createServer(async function (req: InstanceType<any>, res: InstanceType<any>) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    const article = await getArticleFromFile();
    res.write(`<b>Retrieved Article from File System:</b> ${JSON.stringify(article)}</br>`);

    await saveArticleToFile(article);
    res.write(`<b>Saved Article to File System:</b> ${JSON.stringify(article)}</br>`);

    return res.end();
}).listen(8080);
