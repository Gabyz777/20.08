function Interruptor({ ligado, setLigado }) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: ligado ? '#22c55e' : '#ef4444',
                        display: 'inline-block',
                    }}
                />

                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}>
                    {ligado ? 'Restaurante Aberto' : 'Restaurante Fechado'}
                </span>
            </div>

            <div
                onClick={() => setLigado(!ligado)}
                style={{
                    width: '44px',
                    height: '24px',
                    backgroundColor: ligado ? '#22c55e' : '#cbd5e1',
                    borderRadius: '12px',
                    padding: '2px',
                    cursor: 'pointer',
                    transition: 'background-color 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <div
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        transform: ligado ? 'translateX(20px)' : 'translateX(0)',
                        transition: 'transform 0.25s ease',
                    }}
                />
            </div>
        </div>
    );
}

export default Interruptor;
