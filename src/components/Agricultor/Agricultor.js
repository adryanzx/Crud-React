import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Agricultor = () => {
    const navigate = useNavigate();

    // Dados de exemplo de agricultores
    const agricultores = [
        { id: 1, nome: 'Agricultor A', email: 'teste1@gmail.com', cpf: '4151524241421' },
        { id: 2, nome: 'Agricultor B', email: 'teste2@gmail.com', cpf: '4151524241422' },
        { id: 3, nome: 'Agricultor C', email: 'teste3@gmail.com', cpf: '4151524241423' },
    ];

    const handleNovoAgricultor = () => {
        navigate('/novo-Agricultor');
    };

    const handleAlterarAgricultor = (id) => {
        navigate(`/Alterar-Agricultor/${id}`);
    };

    const handleExcluirAgricultor = (id) => {
        // Lógica para excluir o agricultor
        console.log(`Excluir agricultor com id: ${id}`);
    };

    return (
        <>
            <Container className="mt-5">
                <h2>Gerenciar Agricultor</h2>
                <Button variant="primary" className="mb-3" onClick={handleNovoAgricultor}>
                    Novo Agricultor
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>CPF</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agricultores.map((agricultor) => (
                            <tr key={agricultor.id}>
                                <td>{agricultor.nome}</td>
                                <td>{agricultor.email}</td>
                                <td>{agricultor.cpf}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="me-2"
                                        onClick={() => handleAlterarAgricultor(agricultor.id)}
                                    >
                                        Alterar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() => handleExcluirAgricultor(agricultor.id)}
                                    >
                                        Excluir
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default Agricultor;
