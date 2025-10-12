import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Left from "./components/Left"
import NewSplitScreen from "./components/NewSplitScreen"
import Right from "./components/Right"
import Sidebar from "./components/Sidebar"
import SplitScreen from "./components/SplitScreen"


// const App = () => {
//   return (
//     <SplitScreen leftWeight={15} rightWeight={80}>
//       <Left />
//       <Right />
//     </SplitScreen>
//   )
// }

// export default App

//---------------Challenge-----------------

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <NewSplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </NewSplitScreen>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;