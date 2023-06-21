const ul= document.getElementById("test")

for(i=1;i<6;i++){
    const li= document.createElement('li');

    li.innerHTML = i
    ul.appendChild(li);
}