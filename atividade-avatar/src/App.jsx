import Avatar from './components/Avatar';

function App() {
  return (
      <div style={{ padding: '20px'}}>
          <h2>Usuários</h2>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Avatar nome="Kim Min-jun" foto="https://i.pravatar.cc/150?img=62" online={true} />
      <Avatar nome="João" foto="https://i.pravatar.cc/150?img=2" online={false} />
      <Avatar nome="Maria Joaquina" foto="https://i.pravatar.cc/150?img=20" online={false} />
          </div>
    </div>
  );
}

export default App;
