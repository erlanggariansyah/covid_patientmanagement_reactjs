import styled from "styled-components";

const CovidRegionStyled = styled.div`
table, td, tr, th {
    border: 1px solid gray;
    text-align: center;
}
  
table {
    width: 100%;
    border-collapse: collapse;
}

.tableContainer {
    display: block  ;
    padding: 2rem 10rem 2rem 10rem;
    overflow-x: auto;
}

th {
    color: #06D6A0;
    border-color: gray;
    padding: 2rem;
    font-size: 1.5rem;
}

td {
    padding: 1.5rem;
    font-size: 1rem;
}

.boxContainer {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 10rem;
    justify-content: center;
}

.box {
    text-align: center;
    margin: 1rem;
    flex-basis: calc(33.33% - 2rem);
}
`

export default CovidRegionStyled;
