exports.createSample = (str) => {
    const arr = str.split(' ');

    const sampleArr = [];

    arr.forEach((w, i)=> {
        if(i < 16) sampleArr.push(w);
        if(i === 16) sampleArr.push('...')
        if(i > 16) return
    })
    return sampleArr.join(' ');
}
exports.convertTimestampToDate = (created_atJS) => {
    const stamp = new Date(created_atJS);

    const day = stamp.getDate()
    const month = stamp.getMonth()
    const year = stamp.getFullYear()
    let min = stamp.getMinutes()
    let hour = stamp.getHours()

    min+=''
    if(min.length === 1){
        min = min.split('');
        min.unshift('0');
        min = min.join('');
    }
    
    hour += `:${min}`;

    return {
        created:{ 
        date:`${day}-${month}-${year}`, 
        time:`${hour}`
        }
    }
  };

exports.searchArticles = (param, articles) => {
    let searchedArticles = [];

    searchedArticles = [...articles]
    param ?
    searchedArticles = searchedArticles.filter(article => {
        const titleSearch = article.title.toLowerCase().split(/\W/g);
        const descriptionSearch = article.body.toLowerCase().split(/\W/g);;
        const topicSearch = article.topic.toLowerCase();

        return titleSearch.join('').includes(param.toLowerCase())
        || descriptionSearch.includes(param.toLowerCase())
        || topicSearch.includes(param.toLowerCase());
    })
    : searchedArticles = [null]

    return searchedArticles;
}
console.log(exports)