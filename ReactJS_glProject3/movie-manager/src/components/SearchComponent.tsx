import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

const SearchComponent = (props:any) =>{
    return (
        <div id='searchBar'>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => props.setSearchValue(event.target.value)}
            />
            <Button variant="dark">Search</Button>
          </Form>
        </div>
    )
}
export default SearchComponent;