import React from "react";
import "./App.css";

const HomeComponent = () => {
  return <div>Home Page</div>;
};

const NewsComponent = () => {
  return <div>News Page</div>;
};

const CallBackComponent = () => {
  return <div>CallBack Page</div>;
};

const ContactsComponent = () => {
  return <div>Contacts Page</div>;
};

const links = [
  {
    id: "1",
    title: "Home",
    name: "home",
    href: "#",
  },
  {
    id: "2",
    title: "News",
    name: "news",
    href: "#",
  },
  {
    id: "3",
    title: "CallBack",
    name: "callback",
    href: "#",
  },
  {
    id: "4",
    title: "Contacts",
    name: "contacts",
    href: "#",
  },
];

const pages = {
  home: <HomeComponent />,
  news: <NewsComponent />,
  callback: <CallBackComponent />,
  contacts: <ContactsComponent />,
};

class NavComponent extends React.Component {
  state = { currentPage: "home" };

  render() {
    return (
      <div>
        <nav>
          {links.map(({ id, title, name, href }) => (
            <a
            className="header-link"
              name={name}
              href={href}
              key={id}
              onClick={() => this.handleComponent(name)}
            >
              {title}
            </a>
          ))}
        </nav>
        <div>{pages[this.state.currentPage]}</div>
      </div>
    );
  }

  handleComponent = (name) => {
    this.setState({ currentPage: name });
  };
}

export default NavComponent;
