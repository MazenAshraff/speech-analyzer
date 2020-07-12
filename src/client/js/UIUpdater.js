const updateUI = async() => {
    const input = document.getElementById('textplace');
    const data = await Client.postData('/dataPosted', { text: input.value });
    const myinfo = await data.json();
    console.log(myinfo);
    document.getElementById('DataPosted').setAttribute('style', 'border: 2px solid white; border-radius:2%')
    document.getElementById('polarity').textContent = `Polarity: ${myinfo.polarity}`;
    document.getElementById('subjectivity').textContent = `Subjectivity: ${myinfo.subjectivity}`;
    document.getElementById('text').textContent = `Text: ${myinfo.text}`;
    // document.getElementById('polarity_confidence').textContent = `Polarity Confidence: ${myinfo.polarity_confidence}`;
    // document.getElementById('subjectivity_confidence').textContent = `Subjectivity Confidence: ${myinfo.subjectivity_confidence}`;
    return myinfo.polarity;





}

export { updateUI }