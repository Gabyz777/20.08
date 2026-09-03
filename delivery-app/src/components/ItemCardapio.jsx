function ItemCardapio({ nome, descricao, preco }) {
    return (
        <div>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            <div style={{ fontWeight: 'bold' }}>
                R$ {preco.toFixed(2).replace('.', ',')}
            </div>
        </div>
    );
}

export default ItemCardapio;
