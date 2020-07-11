import { postData } from './formhandler'
const updateUI = async() => {
    const p = document.getElementById('DataPosted');
    const input = document.getElementById('textplace');
    console.log('heloooo');
    const data = await postData('/dataPosted', { text: input.value });
    console.log('heree 22');
    const myinfo = await data.json();
    console.log(myinfo);
    p.innerHTML = myinfo;


}

export { updateUI }