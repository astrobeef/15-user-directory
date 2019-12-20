import React, { Component } from 'react';
import Title from '../../components/Title';
import Table from '../../components/Table';
import API from '../../utils/API';
import trimTo from '../../utils/trimTo';

class SearchUsers extends Component {
  state = {
    resUsers: [],
    displayUsers: [],
    order: 1
  };

  componentDidMount() {

    API.getUsers()
      .then(res => this.setState({
        ...this.state,
        displayUsers: this.restructureData(trimTo(res.data.results, 4)),
        resUsers: this.restructureData(trimTo(res.data.results, 4))
      }
      ))
      .catch(err => console.log(err))

  }

  restructureData(data) {

    const restructuredData = data.map(element => {
      return {
        image: element.picture.thumbnail,
        name: `${element.name.first} ${element.name.last}`,
        number: element.cell,
        email: element.email,
        dob: trimTo(element.dob.date, 10)
      };
    });

    const sortedData = this.sortUsers(restructuredData);

    return sortedData;

  }

  handleSorting = event => {

    if (this.state.order === 1) {
      this.setState({ ...this.state, displayUsers: this.sortUsers(this.state.displayUsers, -1), order: -1 });


      console.log("we have sorted vv");
      console.log(this.state);
      console.log("we have sorted ^^");
    }
    else {
      this.setState({ ...this.state, displayUsers: this.sortUsers(this.state.displayUsers, 1), order: 1 });


      console.log("we have sorted vv");
      console.log(this.state);
      console.log("we have sorted ^^");
    }

  };

  handleSearch = ({ target }) => {

    console.log("handling search");

    const searchTerm = target.value.toLowerCase().trim();

    const resUsers = this.state.resUsers;

    this.setState({
      ...this.state, displayUsers: resUsers.filter((user) => {
        const name = user.name.toLowerCase();
        console.log(`"testing ${name}"`)

        const reg = new RegExp(searchTerm, "g");
        const condition = reg.test(name);
        console.log(`when comparing ${searchTerm} to string ${name}, we resulted with ${condition}`);

        console.log(condition);

        if (condition) {
          return true;
        }
        else {
          return false;
        }

      })
    });

  };

  sortUsers(data, order) {

    let sortedData = data;

    switch (order) {
      case (1):
        sortedData = data.sort(function (a, b) {

          const aName = a.name.split(" ")[0];
          const bName = b.name.split(" ")[0];

          if (aName > bName) {
            console.log(`"sorting a, ${aName} over b ${bName}"`);
            return -1;
          }
          if (bName > aName) {
            console.log(`"sorting b, ${bName} over a ${aName}"`);
            return 1;
          }
          console.log("sorting b=a");
          return 0;
        });

        return sortedData;
      case (-1):
        sortedData = data.sort(function (a, b) {

          const aName = a.name.split(" ")[0];
          const bName = b.name.split(" ")[0];

          if (aName < bName) {
            console.log(`"sorting a, ${aName} over b ${bName}"`);
            return -1;
          }
          if (bName < aName) {
            console.log(`"sorting b, ${bName} over a ${aName}"`);
            return 1;
          }
          console.log("sorting b=a");
          return 0;
        });

        return sortedData;
      default:
        return data;
    }

  }

  render() {
    return (

      <div className="App pt-5">

        <Title>User Directory</Title>

        <button type="button" className="btn btn-primary" onClick={this.handleSorting}>Sort by Name (toggle order)</button>
        <input type="text" onInput={this.handleSearch} className="form-control col-3 mx-auto mt-4" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1"></input>

        {this.attemptRenderTable()}

      </div>
    )
  }

  attemptRenderTable() {
    if (this.state.displayUsers.length < 1) {
      return <h3>No results found</h3>;
    }
    return <Table users={this.state.displayUsers}></Table>;
  }
}

export default SearchUsers;