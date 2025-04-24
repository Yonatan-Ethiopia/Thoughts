const getThoughts = async () => {
    const thoughts = await fetch('');
    const thoughtList = thoughts.json();
    renderThoughts(thoughtList);
}
const renderThoughts = ( thoughts ){
    const container = document.getElementById('');
    thoughts.foreach( thought =>{
        const card = document.createElement('div');
        card.innerHTML =` <p>${thought.content}</p>
                        <span class='date'>${new Date(thought.date)} `
        container.append(card);
    })
    
}
const postThought = ()=>{
    const data = document.getElementById('').value;
    const send = fetch('',{
        method: 'Post',
        headers: { 'Content-type: application/json'}
        body: JSON.stringify({
            content: data,
            date: new Date().toISOString()
        })
    })
    
}
