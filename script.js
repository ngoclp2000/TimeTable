var backgroundColorRule = "#fff";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function addClickElementTable(){
    let tds = document.querySelectorAll('.content-table td');
    tds.forEach(element => {
        element.addEventListener('click', e =>{
            if(e.target.classList.contains('active-row')){
                e.target.classList.remove('active-row');
                e.target.style.background = backgroundColorRule;
            }else{
                e.target.classList.add('active-row');
                e.target.style.background = getRandomColor();
            }
        })
    });
}
function changeBackgroundTable(){
    let tds = document.querySelectorAll('.content-table td');
    tds.forEach(element =>{
        element.style.background = backgroundColorRule;
    })
}


window.onload = ()=>{
    let stringScreenSize = screen.width.toString() +"px";
    document.querySelector('.content-table').style.minWidth = stringScreenSize ;
    console.log(stringScreenSize);
    let checkbox = document.querySelector('input[type = "checkbox"]');
    let tableOption = document.getElementById('table-option');
    addClickElementTable();
    checkbox.addEventListener('change',e =>{
        let check = document.querySelector('.check');
        if(e.target.checked){
            check.style.background = "#fff";
            document.body.style.background = "#292929";
            document.body.style.color = "#fff";
            backgroundColorRule = "#292929";
            changeBackgroundTable();
        }else{
            check.style.background = "#092c3e";
            document.body.style.background = "#fff";
            document.body.style.color = "#292929";
            backgroundColorRule = "#fff";
            changeBackgroundTable();
        }
    })

    tableOption.addEventListener('change', e =>{
        if(e.target.value == 'TBN'){
            document.getElementById('NTNN').style.display = "none";
            document.getElementById('TBN').style.display = "block";
        }else if(e.target.value == 'NTNN'){
            document.getElementById('TBN').style.display = "none";
            document.getElementById('NTNN').style.display = "block";
        }
    },false)
}
