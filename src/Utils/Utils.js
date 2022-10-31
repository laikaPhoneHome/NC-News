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