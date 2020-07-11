const updateUI = async() => {
    const input = document.getElementById('textplace');
    const data = await Client.postData('/dataPosted', { text: input.value });
    const myinfo = await data.json();
    console.log(myinfo);
    document.getElementById('polarity').textContent = `polarity: ${myinfo.polarity}`;
    document.getElementById('subjectivity').textContent = `subjectivity: ${myinfo.subjectivity}`;
    document.getElementById('text').textContent = `text: ${myinfo.text}`;
    document.getElementById('polarity_confidence').textContent = `polarity confidence: ${myinfo.polarity_confidence}`;
    document.getElementById('subjectivity_confidence').textContent = `subjectivity confidence: ${myinfo.subjectivity_confidence}`;






}

export { updateUI }