const inputVal = document.getElementsByClassName("inputVal")[0]//işimize yarayan kısımlar 0. arrayde
const addTaskBtn = document.getElementsByClassName("btn")[0]

//console.log(inputVal)
//0console.log(addTaskBtn)

addTaskBtn.addEventListener("click", ()=>{ //value.length diyerek de yapabilirdik
    if(inputVal.value.trim() != 0) {//inputtaki sağdan ve soldan boşlukları silmemize yarar, eğer inputun içi boşsa ekleme yapamayız
        let localItems = JSON.parse(localStorage.getItem("localItem"))///array şeklinde depolanan verilerie çektik
    if(localItems === null) {
        taskList = []
    }
    else {
        taskList = localItems
    }
    taskList.push(inputVal.value) //inputa girilen value'yu oluşturduğumuz listenin içine attık
    localStorage.setItem("localItem" , JSON.stringify(taskList)) //sonra da bub listeyi stringe dönüştürüp localstorage e attık
    }
    
    showlist()
})

function showlist() {
    let output = '';
    let taskListShow = document.querySelector('.todoListItem')//todoların geleceği boş div
    let localItems = JSON.parse(localStorage.getItem("localItem"))//foreach ile içinde dolaşabilmmeiz için array formatına tekrar dönüştürdük
    if(localItems === null) {
        taskList = []
    }
    else {
        taskList = localItems
    }
    taskList.forEach((data, index) => {//buradaki index ile işlem yapılacak öğenin dizinini veririz, data ile de foreach ile array içinde dolaşırız
        output += `
            <div class="todoList">
                <p class="pText">${data}</p>
                <button class="deleteTask" onClick="deleteItem(${index})"> x </button>
            </div>
        `
    });
    
    taskListShow.innerHTML = output;
}
showlist()

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem("localItem"))//silme işlemi yapabilmemiz için yani aşağıda yazdığımız splice metodu ile array içinden veri silebilmek için localstorage'ten çektiğimiz string verisini tekrar arraye dönüştürmemiz lazım.
    taskList.splice(index, 1) //foreachtan dönen öğeyi silmemize yarar. 1, bir tane sil demek(gönderilen indexe göre)
    localStorage.setItem("localItem", JSON.stringify(taskList))//sildiğimiz halini locale attık
    showlist()
}
function clearTask() {
    localStorage.clear()
    showlist()
}