import React from 'react';


export const ALL_BOOKS_QUERY = `
    query{
    courses{
        id
        title
        level
        start_date
        end_date
        image
        type
        price
    }
    }
`;

class Courses extends React.Component {
    state = {
        currency: 'USD',
        courses: [],
        basket: [],
    }


    componentDidMount() {
        this._getDatas();

    }

    _getDatas() {
        fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({query: ALL_BOOKS_QUERY})
        })
            .then(r => r.json())
            .then(data => this.setState({courses: data.data.courses}));
    }

    _addBasket(id) {
        let basket = this.state.courses[id];
        if(!this.state.basket[id]){
            this.setState(prevState => ({
                basket: [...prevState.basket, basket]
            }))        }

    }

    _filterData(event) {
        var filters = [];
        filters[event.target.name] = event.target.value;
        if (event.target.value.length > 3) {
            var search = event.target.value.length;
            var query = `query {
              courseSearch(search: "${filters['search'] ? filters['search'] : ''}",types:"${filters['types'] ? filters['types'] : ''}",level:"${filters['level'] ? filters['level'] : ''}") {
                id
                title
                level
                start_date
                end_date
                image
                type
                price
              }
            

            }`;

            fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query
                })
            })
                .then(r => r.json())
                .then(data => this.setState({courses: data.data.courseSearch}));
        } else {
            this._getDatas();
        }
    }

    render() {
        const {courses, basket} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First name" name="search"
                                   onChange={() => this._filterData(event)}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <select name="types" id="" className="form-control"
                                    onChange={() => this._filterData(event)}>
                                <option value=""> Filter Types...</option>
                                <option value="ONLINE">ONLINE</option>
                                <option value="STUDIO">STUDIO</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <select name="level" id="" className="form-control"
                                    onChange={() => this._filterData(event)}>
                                <option value=""> Filter Level...</option>

                                <option value="INTERMEDIATE">INTERMEDIATE</option>
                                <option value="ADVANCED">ADVANCED</option>
                                <option value="BEGINNER">BEGINNER</option>
                            </select>
                        </div>
                    </div>
                    <div className="container">
                        <button className='btn btn-primary float-right' onClick={() => this._getDatas()}>
                            Clear Filter
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <h1>Basket</h1>
                        <hr/>
                        <ul className="list-group">
                            {
                                basket.map((val, key) => {
                                    return (<li className="list-group-item" key={val.id}>{val.title}</li>)
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-md-10'>
                        {
                            courses.map((val, key) => {
                                return (

                                    <div className="card" key={val.id}>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className='col-md-5 col-12'>
                                                    <img
                                                        src={val.image}
                                                        alt=""
                                                        className='img-thumbnail img-fluid img'
                                                    />
                                                </div>
                                                <div className='col-md-7 col-12'>
                                                    <h3 className="card-title">{val.title}</h3>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="col-md-3 col-6">
                                                            <p>Start Date:</p>
                                                            <p>{val.start_date}</p>
                                                        </div>
                                                        <div className="col-md-3 col-6">
                                                            <p>End Date:</p>
                                                            <p>{val.end_date}</p>
                                                        </div>
                                                        <div className="col-md-2 col-6">
                                                            <p>Weaks</p>
                                                            <p>10</p>
                                                        </div>
                                                        <div className="col-md-2 col-6">
                                                            <p>Level</p>
                                                            <p>{val.level}</p>
                                                        </div>
                                                        <div className="col-md-2 col-6">
                                                            <p>Type</p>
                                                            <p>{val.type}</p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="row float-right ">
                                                        <span
                                                            className='h8 mr-3 mt-2'>Price £ {val.price.toFixed(2)}</span>
                                                        <button className="btn btn-primary "
                                                                onClick={() => this._addBasket(key)}>Book
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                )
                            })
                        }
                    </div>
                </div>


            </div>
        );
    }
}

export default Courses;
