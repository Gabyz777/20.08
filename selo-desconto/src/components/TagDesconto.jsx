function TagDesconto({ porcentagem }) {
    return (
        <div style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'flex',
            width: 'fit-content',
            margin: '10px'
        }}>
            <p>🔥{porcentagem}% OFF</p>
        </div>
    );
}

export default TagDesconto;
