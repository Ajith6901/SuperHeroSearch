let code;

document.getElementById("btn").onclick=()=>{
code=document.querySelector("input").value;
console.log(code);

fetch("https://www.superheroapi.com/api.php/676417447200414/search/"+code)
.then((Response)=> Response.json())
.then((json)=>click(json.results[0].id));


}

document.getElementById("rbtn").onclick=()=>{
    code=Math.floor(Math.random()*732)+2;
    click(code);

}


let getStats=(json)=>{
    // console.log(json);
    let key_array=Object.keys(json);
    let result=key_array.map((element)=>
    {
        return "<p>"+element.toUpperCase()+" : "+json[element]+"</p>";
    })
    return result.join('');

    // "<p> property_name"+value(property)+"</p>"
}


let click=(code)=>{
    fetch("https://www.superheroapi.com/api.php/676417447200414/"+code)
    .then((Response)=> Response.json())
    .then(
        (json)=>{
            
            const name='<h1>'+json.name+'</h1>';
            document.getElementById("demo").innerHTML=name+
            '<img src = '+json.image.url+'></img><br>'+getStats(json.powerstats);
        
            // getStats(json.powerstats);
            // document.getElementById("strength").innerHTML=json.powerstats.strength;
            // document.getElementById("speed").innerHTML=json.powerstats.speed;
            // document.getElementById("power").innerHTML=json.powerstats.power;
        }


        );
}



