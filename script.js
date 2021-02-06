function confirma() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("idade")
    var res = document.getElementById("res")


    if (fAno.value == 0 || fAno.value > ano) {
        alert("Verifique os dados e tente novamente")

    } else {

        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[1].checked) {
            genero = "home"

        } if (idade == 24) {
            img.setAttribute('src', 'yag.jpg')
        } else if (idade == 157) {
            img.setAttribute('src', 'ix.jpg')
        }

        else if (idade < 10) {
            img.setAttribute('src', 'foto-bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'foto-adulto-m.png')
        } else if (idade >= 50) {
            img.setAttribute('src', 'foto-idoso-m.png')
        }
        if (fsex[0].checked) {
            genero = "muiÃ©"

            if (idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else if (idade >= 50) {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        res.innerHTML = `vocÃª tem ${idade} anos, e Ã© ${genero}</br>`
        res.appendChild(img)
        res.style.textAlign = "center"

    }
}