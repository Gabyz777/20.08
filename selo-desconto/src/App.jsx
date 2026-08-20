import TagDesconto from './components/TagDesconto.jsx'

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TagDesconto porcentagem={20} />
            <TagDesconto porcentagem={50} />
        </div>
    );
}

export default App;
