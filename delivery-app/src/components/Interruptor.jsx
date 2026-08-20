import { useState } from 'react';

function Interruptor() {
    const [ligado, setLigado] = useState(false);

    return (
        <button
            onClick={() => setLigado(!ligado)}
            style={{
                backgroundColor: ligado ? '#2e7d32' : '#c62828',
                color: '#ffffff',
                border: 'none',
                padding: '10px 24px',
                fontSize: '1rem',
                fontWeight: 'bold',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
            }}>
            {ligado ? 'ON' : 'OFF'}
        </button>
    );
}

export default Interruptor;
