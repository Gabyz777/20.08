import ItemCardapio from './components/ItemCardapio';
import TagDesconto from './components/TagDesconto';

const categorias = ['Pizzas', 'Hambúrgueres', 'Bebidas', 'Sobremesas'];

function App() {
    return (
        <div
            style={{
                backgroundColor: '#f4f5f7',
                minHeight: '100vh',
                padding: '40px 16px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                display: 'flex',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    borderRadius: '24px',
                    boxShadow:
                        '0 10px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.01)',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                    }}>
                    <h1
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: '#1f2937',
                            margin: 0,
                        }}>
                        Senai <span style={{ color: '#ea1d2c' }}>Delivery</span>
                    </h1>
                    <TagDesconto porcentagem="20" />
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '24px',
                        overflowX: 'auto',
                        paddingBottom: '4px',
                    }}>
                    {categorias.map((cat, idx) => (
                        <span
                            key={idx}
                            style={{
                                backgroundColor: idx === 1 ? '#ea1d2c' : '#f3f4f6',
                                color: idx === 1 ? '#ffffff' : '#6b7280',
                                padding: '8px 16px',
                                borderRadius: '12px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                whiteSpace: 'nowrap',
                                cursor: 'pointer',
                            }}>
                            {cat}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <ItemCardapio
                        nome="X-Bacon"
                        descricao="Pão, hambúrguer 200g, bacon crocante."
                        preco={28.9}
                    />
                    <ItemCardapio
                        nome="Batata Frita"
                        descricao="Porção 400g com cheddar e bacon."
                        preco={15.0}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
