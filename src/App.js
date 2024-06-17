import { ColorModeContext, useMode} from "./scenes/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/SideBar";
import AppRouter from "./router/appRouter";


function App() {
  const [theme, colorMode] = useMode();
  return(
      <ColorModeContext.Provider value={colorMode}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
            <Sidebar />
              <main className="content">
                <Topbar/>
                <AppRouter/>
                </main>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </ColorModeContext.Provider>
  )
}

export default App;
