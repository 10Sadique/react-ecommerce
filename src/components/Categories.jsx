import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    ${mobile({
        flexDirection: 'column',
        padding: '0',
    })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </Container>
    );
};

export default Categories;
