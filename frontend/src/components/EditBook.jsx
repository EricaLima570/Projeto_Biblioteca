import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({
        title: '',
        author: '',
        price: '',
        quantity: '',
        genre: '',
        description: '',
        published_year: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`http://localhost:5442/api/book/${id}`);
                setBook(response.data.data); // Certifique-se de acessar a chave correta da resposta
            } catch (error) {
                console.error('Erro ao buscar livro:', error);
            }
        };

        fetchBook();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleUpdateBook = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5442/api/book/${id}`, book);
            navigate('/'); // Redireciona para a página inicial após editar o livro
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Editar Livro</h2>
            <form onSubmit={handleUpdateBook}>
                <div className="form-group">
                    <label>Título</label>
                    <input type="text" className="form-control" name="title" value={book.title} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Autor</label>
                    <input type="text" className="form-control" name="author" value={book.author} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Preço</label>
                    <input type="number" className="form-control" name="price" value={book.price} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Quantidade</label>
                    <input type="number" className="form-control" name="quantity" value={book.quantity} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Gênero</label>
                    <input type="text" className="form-control" name="genre" value={book.genre} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Descrição</label>
                    <input type="text" className="form-control" name="description" value={book.description} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label>Ano de Publicação</label>
                    <input type="number" className="form-control" name="published_year" value={book.published_year} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
            </form>
        </div>
    );
};

export default EditBook;
