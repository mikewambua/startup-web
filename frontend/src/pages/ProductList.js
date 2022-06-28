import React, { useContext, useEffect, useReducer } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import getError from '../utils/Utils';
import Spinner from '../components/Spinner';
import Message from '../components/Message';
import { Store } from '../Store';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST': {
      return { ...state, loading: true };
    }
    case 'FETCH_SUCCESS': {
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    }
    case 'FETCH_FAIL': {
      return { ...state, loading: false, error: action.payload };
    }
    case 'CREATE_REQUEST': {
      return { ...state, loadingCreate: true };
    }
    case 'CREATE_SUCCESS': {
      return { ...state, loadingCreate: false };
    }
    case 'CREATE_FAIL': {
      return { ...state, loadingCreate: false };
    }
    case 'DELETE_REQUEST': {
      return { ...state, loadingDelete: true, successDelete: false };
    }
    case 'DELETE_SUCCESS': {
      return { ...state, loadingDelete: false, successDelete: true };
    }
    case 'DELETE_FAIL': {
      return { ...state, loadingDelete: false, successDelete: false };
    }
    case 'DELETE_RESET': {
      return { ...state, loadingDelete: false, successDelete: false };
    }
    default:
      return state;
  }
};

const ProductList = () => {
  const [
    {
      loading,
      error,
      pages,
      products,
      loadingCreate,
      loadingDelete,
      successDelete,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page') || 1;

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/products/admin?page=${page}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: toast.error(getError(err)) });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [page, userInfo, successDelete]);

  const createHandler = async () => {
    if (window.confirm('Are you sure you want to create?')) {
      try {
        dispatch({ type: 'CREATE_REQUEST' });
        const { data } = await axios.post(
          '/api/products',
          {},
          { headers: { authorization: `Bearer ${userInfo.token}` } }
        );
        toast.success('Product created successfully');
        navigate(`/admin/product/${data.product._id}`);
        dispatch({ type: 'CREATE_SUCCESS' });
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'CREATE_FAIL' });
      }
    }
  };

  const deleteHandler = async (product) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        await axios.delete(`/api/products/${product._id}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('Product deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err) {
        toast.error(getError(err));
        dispatch({ type: 'DELETE_FAIL', payload: getError(err) });
      }
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <h3>Papers</h3>
        </Col>
        <Col className="col text-end">
          <Button type="button" onClick={createHandler}>
            Create Paper Content
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Spinner></Spinner>}
      {loadingDelete && <Spinner></Spinner>}

      {loading ? (
        <Spinner></Spinner>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    {' '}
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => navigate(`/admin/product/${product._id}`)}
                    >
                      Edit
                    </Button>
                    &nbsp;
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => deleteHandler(product)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {[...Array(pages).keys()].map((item) => (
              <Link
                className={item + 1 === Number(page) ? 'btn text-bold' : 'btn'}
                key={item + 1}
                to={`/admin/products?page=${item + 1}`}
              >
                {item + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
