import "./css/style.css";
import { Hobi } from "./components/Hobi";
import { Omileno } from "./components/Omileno";
import { FavoriteHobbie } from "./components/Omilenihobinja";


function App() {
  return (
    
    <>
      <li>
     Lista od trite omileni hobia
      </li>
    <FavoriteHobbie/>
      
    
    <Hobi/>
    <Omileno/>
    </>
  );
}

export default App;
