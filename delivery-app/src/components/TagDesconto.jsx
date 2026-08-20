function TagDesconto({ porcentagem }) {
    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #ff4757, #ea1d2c)',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '0.75rem',
                padding: '6px 12px',
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(234, 29, 44, 0.3)',
                letterSpacing: '0.5px',
                display: 'inline-block',
            }}>
            🔥 {porcentagem}% OFF
        </div>
    );
}

export default TagDesconto;
