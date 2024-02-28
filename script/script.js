const listaDeTarefas = [];

function criarTarefa(){
    const tarefaCriada = document.getElementById('input-tarefa').value
    if(tarefaCriada.length > 0){
        listaDeTarefas.push(new Tarefas(tarefaCriada))
        let tarefa;
        listaDeTarefas.forEach(i =>{
            tarefa = i.tarefaCriada
        })
        adicionarTarefaNaTela(tarefa)
    }
}

function adicionarTarefaNaTela(tarefas){
    let minhaLista = document.getElementById('container-lista')
    let li = document.createElement('li')
    li.textContent = tarefas
    minhaLista.appendChild(li)
}

function Tarefas(tarefacriada){
    this.tarefaCriada = tarefacriada
    return tarefacriada
}