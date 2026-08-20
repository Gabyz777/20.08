function Avatar({ nome, foto, online }) {
    const corBorda = online ? 'limegreen' : 'gray';

    return (
        <div style={{ textAlign: 'center', margin: '15px'}}>
            <img
                src={foto}
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    border: `4px solid ${corBorda}`,
                }}
            />
            <p>{nome}</p>
        </div>
    );
}

export default Avatar;
