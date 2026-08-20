function ItemCardapio({ nome, descricao, preco }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                border: '1px solid #f3f4f6',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}>
            <div style={{ flex: 1, paddingRight: '12px' }}>
                <h2
                    style={{
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#1f2937',
                        margin: '0 0 4px 0',
                    }}>
                    {nome}
                </h2>
                <p
                    style={{
                        fontSize: '0.825rem',
                        color: '#6b7280',
                        margin: '0 0 8px 0',
                        lineHeight: '1.3',
                    }}>
                    {descricao}
                </p>
                <p style={{ color: '#059669', fontWeight: '800', fontSize: '1rem', margin: 0 }}>
                    R$ {preco.toFixed(2)}
                </p>
            </div>
            <button
                style={{
                    backgroundColor: '#fee2e2',
                    color: '#ea1d2c',
                    border: 'none',
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                +
            </button>
        </div>
    );
}

export default ItemCardapio;
