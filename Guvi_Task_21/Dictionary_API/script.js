//get all the references
let form=document.querySelector('.dictform');
let wordInput=document.querySelector('.wordinput');
let wordInfo=document.querySelector('.wordinfo');
let searchButton=document.querySelector('.searchbutton');

function handleSubmit(event)
{
    event.preventDefault();
    let word=wordInput.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res=>{
        //console.log('res.status: ', res.status);
    if (res.status==404) {
        //console.log("No")
        wordInfo.innerHTML=''
        let error_div=document.createElement('row')
        error_div.setAttribute('class','row')
        let error_col=document.createElement('col')
        error_col.setAttribute('class','col-sm-12')
        error_col.innerHTML=`<p><span style="color:red">Sorry, No results found:( </span></p>`
        error_div.append(error_col)
        wordInfo.append(error_div)
    }
    else{
        //console.log("Yes")  
        //Fetching data from API
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response=>response.json())
        .then(data=> 
        {
        //get the meaning
        //create paragraph
        let paragraph=document.createElement('p')
        wordInfo.innerHTML=''
        //GET audio data
        let audioSource=data[0].phonetics[0].audio;
        //paragraph.innerHTML="hello"
        paragraph.innerHTML=`
        <span class='fas fa-volume-up audio-icon'></span>
            <audio class='audio'>
                <source src=${audioSource} type='audio/mpeg'>
            </audio>
        Word: <b>${data[0].word}</b>`
        //append para to wordInfo
        wordInfo.appendChild(paragraph)
        document.querySelector('.audio-icon').addEventListener('click', event => {
                document.querySelector('.audio').play();
            });
        //create a list
        let list=document.createElement('ul')
        list.style.listStyleType='none'
        let meanings=data[0].meanings;
        for(let meaning of meanings){
            //create a list item
                let listItem=document.createElement('li')
            //set the content item
                listItem.innerHTML=`<span style="font-weight: bolder;">${meaning.partOfSpeech}</span>`
                //create sublist
                let subList=document.createElement('ul')
                subList.style.listStyleType='disc'
                let definitions=meaning.definitions;
                definitions.map(function(e)
                {
                //create a list item
                let sublistItem=document.createElement('li')           
                //set the content item
                sublistItem.innerHTML=`${e.definition}`
                subList.append(sublistItem)
                })

            //append it to list
            list.append(listItem,subList)

        }
        wordInfo.append(list)

        })
        .catch((error)=>{
            console.log(error)
        })
}
})
}
form.addEventListener('submit',handleSubmit)
searchButton.addEventListener('click',handleSubmit)