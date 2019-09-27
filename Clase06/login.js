"use strict";
function Loguear() {
    var xhr = new XMLHttpRequest();
    var mail = document.getElementById("mail");
    var clave = document.getElementById("clave");
    var form = new FormData();
    form.append('mail', mail);
    form.append('clave', clave);
    form.append('op', "existe");
    xhr.open('POST', 'nexo.php', true);
    xhr.setRequestHeader("enctype", "multipart/form-data");
    xhr.send(form);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var retJSON = JSON.parse(xhr.responseText);
            if (!retJSON.Ok) {
                console.error("NO se subió la foto!!!");
            }
            else {
                console.info("Foto subida OK!!!");
                document.getElementById("imgFoto").src = "./BACKEND/" + retJSON.Path;
            }
        }
    };
}
//# sourceMappingURL=login.js.map