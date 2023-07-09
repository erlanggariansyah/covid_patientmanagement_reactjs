import styled from "styled-components";

const ItemListStyled = styled.div`
ul {
	display: flex;
	flex-direction: column;
	list-style: none;
	font-size: 1.5rem;
	text-align: center;
}

li {
	margin-bottom: 1rem;
}

@media(min-width: 768px) {
	ul {
		flex-direction: row;
	}

	li {
		margin: 1rem;
	}
}
`
export default ItemListStyled;
