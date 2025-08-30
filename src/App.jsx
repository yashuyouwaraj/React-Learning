// import Add from "./components/Add";
// import Greet from "./components/Greet";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import JSXRules from "./components/JSXRules";
// import Main from "./components/Main";
// import WelcomeMessage from "./components/WelcomeMessage";

import GreetingTime from "./components/GreetingTime";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

// import Arrays from "./components/Arrays";
// import Card from "./components/card";
// import Expressions from "./components/Expressions";
// import Greeting from "./components/Greeting";
// import Person from "./components/Person";
// import Product from "./components/Product";
// import ProductList from "./components/ProductList";
// import Products from "./components/Products";
// import Props from "./components/Props1";
// import UserList from "./components/UserList";
// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword= () => <h1>Invalid Password</h1>

// const Password = ({isValid})=>{
//   return isValid ? <ValidPassword /> : <InvalidPassword />
// }
// const Cart = () => {
//   const items = ["Wireless Earbuds", "Power Bank", "New SSD" , "Hoddies"]
//   return (
//     <div>
//       <h1>Cart 🛒</h1>
//       {items.length>0 && <h2>You have {items.length} items in your Cart</h2> }
//       <ul>
//         <h4>Products</h4>
//         {items.map( (item) => (
//           <li key={Math.random()}>{item}</li>
//         ))}
//       </ul>

//     </div>
//   )
// }

const App = () => {
  return (
    // <section>
    //   {/* <Header />
    //   <Main />
    //   <WelcomeMessage /> */}
    //   {/* <JSXRules />
    //   <Footer /> */}
    //   {/* <Add /> */}
    //   {/* <Greet /> */}
    //   {/* <Expressions /> */}
    //   {/* <Greeting />
    //   <Products />
    //   <Arrays />
    //   <UserList />
    //   <ProductList /> */}
    //   {/* <Props />
    //   <Person /> */}
    //   {/* <Product name="Lenovo" price="$1699" /> */}
    // </section>
    // <div>
    //   <Card>
    //     <h1>My card 1</h1>
    //     <p>This is some content for card 1</p>
    //   </Card>
    //   <Card>
    //     <h1>My card 2</h1>
    //     <p>This is some content for card 1</p>
    //   </Card>
    //   <Card>
    //     <h1>My card 3</h1>
    //     <p>This is some content for card 1</p>
    //   </Card>
    // </div>
    // <section>
    //   <Password isValid={true} />
    // </section>
    <section>
      <UserStatus loggedIn={true} isAdmin={true} />
      <Weather temperature={18} />
      <GreetingTime timeOfDay="morning" />
    </section>
  );
};

export default App;
