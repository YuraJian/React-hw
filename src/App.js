import React from "react";
import "./App.css";

const HomeComponent = (props) => {
  return <div>Home Page</div>;
};

const NewsComponent = (props) => {
  return <div>News Page</div>;
};

const CallBackComponent = (props) => {
  return <div>CallBack Page</div>;
};

const ContactsComponent = (props) => {
  return <div>Contacts Page</div>;
};

class NavComponent extends React.Component {
  state = { currentPage: <HomeComponent /> };

  render() {
    return (
      <div>
        <nav>
          <a href="home" onClick={this.handleComponent}>
            Home
          </a>
          <a href="home" onClick={this.handleComponent}>
            News
          </a>
          <a href="home" onClick={this.handleComponent}>
            CallBack
          </a>
          <a href="home" onClick={this.handleComponent}>
            Contacts
          </a>
        </nav>
        <div>{this.state.currentPage}</div>
      </div>
    );
  }

  handleComponent = (event) => {
    event.preventDefault();
    const target = event.target;
    const targetText = target.innerText;

    switch (targetText) {
      case "Home":
        this.setState({
          currentPage: <HomeComponent />,
        });
        console.log(this.state);
        break;
      case "News":
        this.setState({
          currentPage: <NewsComponent />,
        });
        break;
      case "CallBack":
        this.setState({
          currentPage: <CallBackComponent />,
        });
        break;
      case "Contacts":
        this.setState({
          currentPage: <ContactsComponent />,
        });
        break;

      default:
        this.setState({
          currentPage: <HomeComponent />,
        });
    }
  };
}

export default NavComponent;
