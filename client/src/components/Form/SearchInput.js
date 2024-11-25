import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const { data } = axios.get(`/api/v1/product/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate(`/search`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="me-3">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="search-home form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
