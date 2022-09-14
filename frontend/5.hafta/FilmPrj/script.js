{/* <tr>
<td><img src="" class="img-fluid img-thumbnail" ></td>
<td></td>
<td></td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>  */}




const titleInput = document.getElementById("title");
const directorInput = document.getElementById("director");
const urlInput = document.getElementById("url");
const btnSubmit = document.getElementById("submit-btn");
const  filmList = document.getElementById("films")


btnSubmit.addEventListener("click" , addFilm);

function addFilm(){
    title = titleInput.value;
    director = directorInput.value;
    url = urlInput.value;
    if(title === "" || url === "" || director === ""){
        setAlert("danger" , "Bu alan bos olamaz!");
    }
    else{

        setAlert("success" , "tebrikler");
    filmList.innerHTML += `
    <tr>
 <td><img src="${url}" class="img-fluid img-thumbnail" width="150"></td>
 <td>${title}</td>
<td>${director}</td>
<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>  
    `
}
}


localStorage.setItem("key" , JSON.stringify([]))

JSON.parse(localStorage.getItem());


