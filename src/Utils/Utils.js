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

    hour += `:${min}`;

    return {
        created:{ 
        date:`${day}-${month}-${year}`, 
        time:`${hour}`
        }
    }
  };