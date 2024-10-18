
/*generating graph with random-optionally fully-connected and cycles (i don't know why i did that)*/
function generateGraph({amountVertices= 3} = {}){
    if (amountVertices <= 0 || amountVertices > 26) { return null }

    let graph = {}
    const firstVertexChar = 65 // ASCII-code of char (65 - "A")
    // generate graph's vertices
    for(let i = 0; i < amountVertices; i++){
        let vertex = String.fromCharCode(firstVertexChar+i)
        graph[vertex] = []
    }

    // generate graph's relations
    for(let i = 0; i < amountVertices; i++){
        for(let j = i+1; j < amountVertices; j++){
            if (Math.random()>0.7){
                let vertex1 = String.fromCharCode(firstVertexChar+i)
                let vertex2  = String.fromCharCode(firstVertexChar+j)

                graph[vertex1].push(vertex2)
                graph[vertex2].push(vertex1)
            }
        }
    }
    return graph
}

// TODO
function generateDirectedGraph(){

}

function dijkstra(){

}




