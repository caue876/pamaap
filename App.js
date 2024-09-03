import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";

const Menu = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

        <Menu.Screen name="TelaJavaScript" component={TelaJavaScript}/>
        <Menu.Screen name="TelaReact" component={TelaReact}/>
        <Menu.Screen name="TelaNode" component={TelaNode}/>


    </NavigationContainer>
    
  );
}

