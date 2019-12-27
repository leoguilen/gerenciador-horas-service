module.exports = (id_cell,event) => {
    const index_eventos = { entrada: 3, saida_almoco: 4, entrada_almoco: 5, saida: 6 };
    
    switch (event) {
        case "entrada": {
            id_cell = id_cell.replace("C2", "C" + index_eventos.entrada);
        } 
            break;
        case "saida_almoco": {
            id_cell = id_cell.replace("C2", "C" + index_eventos.saida_almoco);
        } 
            break;
        case "entrada_almoco": {
            id_cell = id_cell.replace("C2", "C" + index_eventos.entrada_almoco);
        } 
            break;
        case "saida": {
            id_cell = id_cell.replace("C2", "C" + index_eventos.saida);
        } 
            break;
        default: {
            id_cell = "Event not valid";
        }
    }

    return id_cell;
};