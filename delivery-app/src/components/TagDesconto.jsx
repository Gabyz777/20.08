function TagDesconto({ porcentagem }) {
    return (
        <div
            style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fee2e2',
                color: '#dc2626',
                padding: '6px 12px',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
            }}>
            <span>🔥</span> {porcentagem}% OFF
        </div>
    );
}

export default TagDesconto;
