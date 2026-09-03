import { useState, useEffect } from 'react';
import ItemCardapio from './components/ItemCardapio';
import TagDesconto from './components/TagDesconto';
import Interruptor from './components/Interruptor';

const categorias = ['Destaques', 'Hambúrgueres', 'Pizzas', 'Bebidas', 'Sobremesas'];

function App() {
    const [itensNoCarrinho, setItensNoCarrinho] = useState(0);
    const [totalCarrinho, setTotalCarrinho] = useState(0);
    const [cardapio, setCardapio] = useState([]);
    const [ligado, setLigado] = useState(true);

    // Estados adicionados para a lógica do app
    const [categoriaAtiva, setCategoriaAtiva] = useState('Destaques');
    const [endereco, setEndereco] = useState('');
    const [modalAberto, setModalAberto] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setCardapio([
                {
                    id: 1,
                    nome: 'X-Bacon Duplo',
                    descricao:
                        'Pão brioche, 2x smash 100g, cheddar fatiado e bacon artesanal crocante.',
                    preco: 35.0,
                    categoria: 'Hambúrgueres',
                },
                {
                    id: 2,
                    nome: 'Pizza Calabresa',
                    descricao:
                        'Massa artesanal de fermentação natural, molho de tomate, moçarela e calabresa.',
                    preco: 45.0,
                    categoria: 'Pizzas',
                },
                {
                    id: 3,
                    nome: 'Suco de Laranja 500ml',
                    descricao: '100% natural, espremido na hora, sem adição de açúcar ou água.',
                    preco: 8.0,
                    categoria: 'Bebidas',
                },
                {
                    id: 4,
                    nome: 'Brownie de Chocolate',
                    descricao:
                        'Brownie artesanal, feito com chocolate belga e servido com sorvete de baunilha.',
                    preco: 12.0,
                    categoria: 'Sobremesas',
                }
            ]);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const adicionarAoCarrinho = (preco) => {
        setItensNoCarrinho((prev) => prev + 1);
        setTotalCarrinho((prev) => prev + preco);
    };

    function finalizarCompra() {
        if (itensNoCarrinho === 0) {
            setMensagemModal('Coloque algo no carrinho!');
            setModalAberto(true);
            return;
        }

        if (endereco.trim() === '') {
            setMensagemModal('Por favor, preencha o endereço de entrega!');
            setModalAberto(true);
            return;
        }

        setMensagemModal('Pedido realizado com sucesso!');
        setModalAberto(true);
        setItensNoCarrinho(0);
        setTotalCarrinho(0);
        setEndereco('');
    }

    const cardapioFiltrado =
        categoriaAtiva === 'Destaques'
            ? cardapio
            : cardapio.filter((item) => item.categoria === categoriaAtiva);

    return (
        <div
            style={{
                backgroundColor: '#ffffff',
                minHeight: '100vh',
                width: '100%',
                color: '#0f172a',
                fontFamily:
                    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}>
            {modalAberto && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 100,
                        backdropFilter: 'blur(4px)',
                    }}>
                    <div
                        style={{
                            backgroundColor: '#ffffff',
                            padding: '24px 32px',
                            borderRadius: '16px',
                            textAlign: 'center',
                            maxWidth: '400px',
                            width: '90%',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                        }}>
                        <p
                            style={{
                                margin: '0 0 20px 0',
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#0f172a',
                            }}>
                            {mensagemModal}
                        </p>
                        <button
                            onClick={() => setModalAberto(false)}
                            style={{
                                backgroundColor: '#ea1d2c',
                                color: '#ffffff',
                                border: 'none',
                                padding: '10px 24px',
                                borderRadius: '100px',
                                fontWeight: 600,
                                cursor: 'pointer',
                            }}>
                            OK
                        </button>
                    </div>
                </div>
            )}

            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '24px 32px',
                }}>
                <header
                    style={{
                        paddingBottom: '20px',
                        borderBottom: '1px solid #f1f5f9',
                        position: 'sticky',
                        top: 0,
                        backgroundColor: '#ffffff',
                        zIndex: 10,
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                        <div>
                            <span
                                style={{
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    color: '#94a3b8',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}>
                                Delivery
                            </span>
                            <h1
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 800,
                                    color: '#0f172a',
                                    margin: '2px 0 0 0',
                                    letterSpacing: '-0.02em',
                                }}>
                                Senai
                                <span style={{ color: '#ea1d2c' }}>.</span>
                            </h1>
                        </div>
                        <TagDesconto porcentagem="20" />
                    </div>

                    <div
                        style={{
                            marginTop: '16px',
                            paddingTop: '12px',
                            borderTop: '1px solid #f8fafc',
                        }}>
                        <Interruptor ligado={ligado} onToggle={() => setLigado((prev) => !prev)} />
                    </div>
                </header>

                <main style={{ paddingTop: '24px' }}>
                    {itensNoCarrinho > 0 && (
                        <div
                            style={{
                                backgroundColor: '#0f172a',
                                color: '#ffffff',
                                borderRadius: '16px',
                                padding: '16px 24px',
                                marginBottom: '24px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '16px',
                                boxShadow: '0 10px 20px rgba(15, 23, 42, 0.15)',
                            }}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                }}>
                                <span style={{ fontSize: '1.25rem' }}>🛒</span>
                                <div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>
                                        Seu Pedido
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                                        {itensNoCarrinho} {itensNoCarrinho === 1 ? 'item' : 'itens'}{' '}
                                        • Total: R$ {totalCarrinho.toFixed(2).replace('.', ',')}
                                    </div>
                                </div>
                            </div>
                            <span
                                style={{
                                    backgroundColor: '#ea1d2c',
                                    color: '#ffffff',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    marginLeft: '16px',
                                    whiteSpace: 'nowrap',
                                }}>
                                Ver Sacola (R$ {totalCarrinho.toFixed(2).replace('.', ',')})
                            </span>
                        </div>
                    )}

                    <div style={{ marginBottom: '28px' }}>
                        <h2
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: '#64748b',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                            Categorias
                        </h2>
                        <ul
                            style={{
                                display: 'flex',
                                gap: '10px',
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                overflowX: 'auto',
                            }}>
                            {categorias.map((cat, idx) => {
                                const isAtiva = categoriaAtiva === cat;
                                return (
                                    <li
                                        key={idx}
                                        onClick={() => setCategoriaAtiva(cat)}
                                        style={{
                                            backgroundColor: isAtiva ? '#0f172a' : '#f8fafc',
                                            color: isAtiva ? '#ffffff' : '#64748b',
                                            border: isAtiva
                                                ? '1px solid #0f172a'
                                                : '1px solid #e2e8f0',
                                            padding: '10px 20px',
                                            borderRadius: '100px',
                                            fontSize: '0.9rem',
                                            fontWeight: isAtiva ? 600 : 500,
                                            whiteSpace: 'nowrap',
                                            cursor: 'pointer',
                                        }}>
                                        {cat}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '20px',
                        }}>
                        <h2
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                color: '#0f172a',
                                margin: 0,
                            }}>
                            {categoriaAtiva === 'Destaques'
                                ? 'Destaques do Cardápio'
                                : categoriaAtiva}
                        </h2>
                        <span
                            style={{
                                fontSize: '0.85rem',
                                color: '#64748b',
                                fontWeight: 500,
                                marginLeft: '12px',
                                whiteSpace: 'nowrap',
                            }}>
                            {cardapioFiltrado.length} opções
                        </span>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                            gap: '20px',
                        }}>
                        {cardapio.length === 0 ? (
                            <div
                                style={{
                                    gridColumn: '1 / -1',
                                    padding: '40px 20px',
                                    textAlign: 'center',
                                    backgroundColor: '#f8fafc',
                                    borderRadius: '16px',
                                    border: '1px dashed #e2e8f0',
                                }}>
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: '0.875rem',
                                        color: '#64748b',
                                        fontWeight: 500,
                                    }}>
                                    🔄 Carregando opções do restaurante...
                                </p>
                            </div>
                        ) : (
                            cardapioFiltrado.map((item) => (
                                <ItemCardapio
                                    key={item.id}
                                    nome={item.nome}
                                    descricao={item.descricao}
                                    preco={item.preco}
                                    onAdicionar={() => adicionarAoCarrinho(item.preco)}
                                />
                            ))
                        )}
                    </div>

                    <section
                        style={{
                            marginTop: '40px',
                            paddingTop: '24px',
                            borderTop: '1px solid #f1f5f9',
                        }}>
                        <h2
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                color: '#64748b',
                                marginBottom: '12px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                            Finalizar Pedido
                        </h2>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <input
                                type="text"
                                placeholder="Rua e Número da Entrega"
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                                style={{
                                    flex: 1,
                                    minWidth: '280px',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    fontFamily: 'inherit',
                                }}
                            />
                            <button
                                onClick={finalizarCompra}
                                style={{
                                    backgroundColor: '#ea1d2c',
                                    color: '#ffffff',
                                    border: 'none',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                }}>
                                Finalizar Pedido
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
