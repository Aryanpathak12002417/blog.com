const body=document.querySelector('.body');
let count=1;

const fetchdata= async ()=>{
  const response=await axios.get('https://newsapi.org/v2/everything',{
    params:{
      apiKey:'386eb8f3f2854c19ae6f82141d99a7bb',
      q:'army',
      page:`${count}`,
      sortBy:'popularity'
    }
  })
  const articles=response.data.articles;
  console.log(response);
  let link="https://picsum.photos/200/300";
  for(let i=0;i<articles.length;i++){
    const div=document.createElement('div');
    div.classList.add('article');
    div.innerHTML=`
    <article class="card">
    <div class="card-user-details">
        <img src=${response.data.articles[i].urlToImage} alt="" class="navimg ">
        <span class="user-name">${response.data.articles[i].source.name}</span>
        <span class="card-date">${response.data.articles[i].publishedAt}</span>
    </div>
    <div class="card-details">
        <div class="card-title">
            <h2 class="card-topic">
                ${response.data.articles[i].title}
            </h2>
            <div class="card-sumary">${response.data.articles[i].content}</div>
            <a  class="read-link" href=${response.data.articles[i].url}>Read More</a>
        </div>
        <div class="cardimg"><img  width="150px" height="100px" style="border-radius:10px"src=${response.data.articles[i].urlToImage}  alt="" srcset=""></div>
        </div>
</article>
    `;
    body.appendChild(div);
  }
}




const fetchdata1= async ()=>{

  body.innerHTML=``;
  const response=await axios.get('https://newsapi.org/v2/top-headlines',{
    params:{
      apiKey:'386eb8f3f2854c19ae6f82141d99a7bb',
      category:'sports',
      country:'in'
    }
  })
  const articles=response.data.articles;
  console.log(response);
  for(let i=0;i<articles.length;i++){
    const div=document.createElement('div');
    div.classList.add('article');
    div.innerHTML=`
    <article class="card">
    <div class="card-user-details">
        <img src=${response.data.articles[i].urlToImage} alt="" class="navimg ">
        <span class="user-name">${response.data.articles[i].source.name}</span> 
        <span class="card-date">${response.data.articles[i].publishedAt}</span>
    </div>
    <div class="card-details">
        <div class="card-title">
            <h2 class="card-topic">
                ${response.data.articles[i].title}
            </h2>
            <div class="card-sumary">${response.data.articles[i].content}</div>
        </div>
        <div class="cardimg"><img  width="150px" height="100px" style="border-radius:10px"src=${response.data.articles[i].urlToImage}  alt="" srcset=""></div>
        </div>
</article>
    `;
    body.appendChild(div);
  }
}

fetchdata();

const sports=document.querySelector('.sports');
sports.addEventListener('onclick',async()=>{
  fetchdata1();
})


