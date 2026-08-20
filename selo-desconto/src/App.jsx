import TagDesconto from './components/TagDesconto.jsx'

function App() {
    return (
        <div>
            <TagDesconto porcentagem={20} />
            <TagDesconto porcentagem={50} />
        </div>
    );
}

export default App;
