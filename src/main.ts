declare var Handlebars:any;
const key='6c9196426ffb45f88380c7a712d54849';

const newsCont=document.getElementById('news-container');

const templateSource = document.getElementById('news-template').innerHTML;
const template = Handlebars.compile(templateSource);


const searchForm=document.querySelector('.search');
searchForm.addEventListener("submit",getQuery)

function getQuery(event){
    event.preventDefault();
    
    let topic=(<HTMLInputElement>document.getElementById('query')).value;
    let url='https://newsapi.org/v2/everything?q='+topic+'&apiKey='+key;
    fetchNews(url);
}

async function fetchNews(url) {
    let res=await (await fetch(url)).json();
    
    //we remove all previous news
    while(newsCont.firstChild){
        newsCont.removeChild(newsCont.firstChild);
    }

    document.getElementById('news-container').innerHTML = template(res);

    console.log('done');
        
}