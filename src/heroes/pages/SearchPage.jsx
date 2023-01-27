import queryString from 'query-string';
import { useLocation, useNavigate } from "react-router-dom"

import { HeroCard } from "../components/HeroCard"
import Loading from "../../ui/components/Loading"

import { useForm } from "../../hooks/useForm"

import { getHeroesByName } from "../helpers";
import { useState } from 'react';


export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()


  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { onInputChange, onResetForm, searchText } = useForm({ searchText: '' });
  // const [search, setSearch] = useState(true)

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
    onResetForm()
  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">

        <div className="col-5 animate__animated animate__fadeInLeft">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              onChange={onInputChange}
              value={searchText}
              autoComplete="off"
            />
            <button className="btn btn-outline-dark mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeInUpBig"
            style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }

        </div>
      </div>
    </>
  )
}
