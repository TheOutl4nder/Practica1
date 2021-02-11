var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const key = '6c9196426ffb45f88380c7a712d54849';
const newsCont = document.getElementById('news-container');
const templateSource = document.getElementById('news-template').innerHTML;
const template = Handlebars.compile(templateSource);
const searchForm = document.querySelector('.search');
searchForm.addEventListener("submit", getQuery);
function getQuery(event) {
    event.preventDefault();
    let topic = document.getElementById('query').value;
    let url = 'https://newsapi.org/v2/everything?q=' + topic + '&apiKey=' + key;
    fetchNews(url);
}
function fetchNews(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield (yield fetch(url)).json();
        document.getElementById('news-container').innerHTML = template(res);
        console.log('done');
    });
}
