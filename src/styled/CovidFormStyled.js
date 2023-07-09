import styled from "styled-components";

const CovidFormStyled = styled.div`
.container {
    margin: 1rem;
    padding: 2rem 10rem 2rem 10rem;
}

section {
    display: block;
    margin: 20px 0 20px 0;
}

input {
    display: block;
    outline-color: #06D6A0;
    outline-offset: 2.5px;
    outline-style: auto;
    border-radius: 5px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
}

select {
  display: block;
  outline-color: #06D6A0;
  outline-offset: 2.5px;
  outline-style: auto;
  border-radius: 5px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  box-sizing: border-box;
}
  
.form {
    display: flex;
    flex-direction: column;
    text-align: center;
}

  .form__field {
    display: block;
    margin-bottom: 10px;
  }
  
  .form__left {
    margin-bottom: 1rem;
  }
  
  .form__title {
    text-align: center;
    color: #06D6A0;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }
  
  label {
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #06D6A0;
    color: #fff;
    box-sizing: border-box;
    width: 100%;
  }
  
  .form__image {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }
  
  @media (min-width: 768px) {
    .container {
        flex-direction: column;
    }
  }

  @media (min-width: 992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }
  
    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    .form__left {
      flex-basis: 60%;
    }
  
    .form__right {
      flex-basis: 60%;
    }
  }
`

export default CovidFormStyled;
