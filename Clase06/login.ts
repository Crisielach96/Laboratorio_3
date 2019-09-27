function Loguear() : void {
    let xhr : XMLHttpRequest = new XMLHttpRequest();
    let mail : any = (<HTMLInputElement> document.getElementById("mail"));
    let clave : any = (<HTMLInputElement> document.getElementById("clave"));

    let form : FormData = new FormData();
    form.append('mail', mail);
    form.append('clave', clave);
    form.append('op', "existe");
    xhr.open('POST', 'nexo.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {

            console.log(xhr.responseText);
            
            let retJSON = JSON.parse(xhr.responseText);
            if(!retJSON.Ok){
                console.error("NO se subió la foto!!!");
            }
            else{
                console.info("Foto subida OK!!!");
                (<HTMLImageElement> document.getElementById("imgFoto")).src = "./BACKEND/" + retJSON.Path;
            }
        }
    };
}