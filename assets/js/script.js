// Alterando visibilidade da senha
let botaoVisibilidade = document.querySelector('.material-symbols-outlined');

botaoVisibilidade.addEventListener('click', function() {
    let input = document.querySelector('#password');

    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});

// Escrevendo novo post
document.getElementById('botao-postar').addEventListener('click', function() {
    let texto = document.querySelector.document.getElementById('container-postagem')[0].value;
    let imagem = document.getElementById('arquivo').files[0];
    let outroPost = document.createElement('div');
    outroPost.classList.add("escrever-post"); 

    outroPost.innerHTML = `
        <div id="posts">
                <img src="../assets/img/pessoa.svg" alt="" id="posts-img-usuario">
                <div id="posts-container-informacoes">
                    <div id="posts-informacoes-usuario">
                        <div class="menu-pessoas-img-perfil"></div>
                        <a href="#" class="menu-pessoas-usuario">@usuario</a>
                    </div>
                    <div id="posts-informacoes-post">
                        <img src="../assets/img/comentario1.png" alt="" class="posts-informacoes-post-img">
                        <img src="../assets/img/joinha.png" alt="" class="posts-informacoes-post-img">
                        <img src="../assets/img/coracao.png" alt="" class="posts-informacoes-post-img">
                    </div>
                </div>
                <div id="div-comentario-posts">
                    <p id="comentario-posts">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
            </div>
    `
    let containerPostImagem = outroPost.querySelector("#posts-img-usuario");
    let outraImagem = document.createElement('img');
    containerPostImagem.appendChild(outroPost);


    document.getElementsById("container-postagem")[0].appendChild(outroPost);
    document.getElementsById("escrever-post")[0].value = "";
    document.getElementById('arquivo').value = "";
})