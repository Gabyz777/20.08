function ItemCardapio({ nome, descricao, preco, onAdicionar }) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                backgroundColor: '#ffffff',
                border: '1px solid #f1f5f9',
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)',
            }}>
            <div
                style={{
                    flex: 1,
                    paddingRight: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                <div>
                    <h3
                        style={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#0f172a',
                            margin: '0 0 6px 0',
                            lineHeight: 1.3,
                        }}>
                        {nome}
                    </h3>
                    <p
                        style={{
                            fontSize: '0.8rem',
                            color: '#64748b',
                            margin: '0 0 12px 0',
                            lineHeight: 1.4,
                        }}>
                        {descricao}
                    </p>
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>
                    R$ {preco.toFixed(2).replace('.', ',')}
                </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button
                    onClick={onAdicionar}
                    style={{
                        backgroundColor: '#fef2f2',
                        color: '#ea1d2c',
                        border: '1px solid #fee2e2',
                        padding: '8px 14px',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                    }}>
                    <span style={{ fontSize: '1rem', lineHeight: 1 }}>+</span> Adicionar
                </button>
            </div>
        </div>
    );
}

export default ItemCardapio;
