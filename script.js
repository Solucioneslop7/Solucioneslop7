document.addEventListener('DOMContentLoaded', function() {
    const data = {
        fecha_creacion: "13/07/2024 14:22:47",
        desde: "03/07/2024",
        hasta: "13/07/2024",
        filas: [
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Fibra gruesa", cantidad: "0,70", existencia: "39,30", diferencia: "38,60" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Bolsa", cantidad: "24,00", existencia: "-16,00", diferencia: "-40,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Biocuero blanco", cantidad: "4,00", existencia: "55,00", diferencia: "51,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Pelón blanco", cantidad: "1,00", existencia: "59,00", diferencia: "58,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Planta zeul blanco", cantidad: "2,00", existencia: "0,00", diferencia: "-2,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Pimpom 0.8", cantidad: "0,80", existencia: "99,20", diferencia: "98,40" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Bolsa negra", cantidad: "48,00", existencia: "-32,00", diferencia: "-80,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Celasti 1.1", cantidad: "0,60", existencia: "99,40", diferencia: "98,80" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Hilos blanco", cantidad: "0,50", existencia: "1,50", diferencia: "1,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Plantilla blanco", cantidad: "2,00", existencia: "58,00", diferencia: "56,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Cemento", cantidad: "2,00", existencia: "68,00", diferencia: "66,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Polinan blanco", cantidad: "3,00", existencia: "57,00", diferencia: "54,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Pegamento", cantidad: "2,00", existencia: "68,00", diferencia: "66,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Falsa", cantidad: "2,00", existencia: "38,00", diferencia: "36,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Bolsa negra", cantidad: "48,00", existencia: "-32,00", diferencia: "-80,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Gebe blanco", cantidad: "2,00", existencia: "0,00", diferencia: "-2,00" },
            { idcliente: "astrid zonimar", idpedido: "Pedido-000003", idproducto: "Pasador corazón blanco", cantidad: "2,00", existencia: "0,00", diferencia: "-2,00" }
        ]
    };

    // Reemplaza los valores en el encabezado
    document.querySelector('.title p:nth-child(2)').textContent = `Fecha de creación: ${data.fecha_creacion}`;
    document.querySelector('.title p:nth-child(3)').textContent = `Desde: ${data.desde} Hasta: ${data.hasta}`;

    // Genera las filas dinámicamente
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Limpia las filas existentes

    data.filas.forEach(fila => {
        const tr = document.createElement('tr');

        Object.keys(fila).forEach(key => {
            const td = document.createElement('td');
            td.textContent = fila[key];
            tr.appendChild(td);
        });

        const diferencia = parseFloat(fila.diferencia.replace(',', '.'));
        if (diferencia < 0) {
            tr.classList.add('negativa');
        }

        tbody.appendChild(tr);
    });
});
