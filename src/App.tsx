import { Show } from "@clerk/react"
import HeaderBar from "./features/components/HeaderBar"
import FirstPage from "./features/page/FirstPage"
import WelcomePage from "./features/page/WelcomePage"

function App() {
  return (
    <>
      <HeaderBar />
      <Show when="signed-out">
        <WelcomePage />
      </Show>
      <Show when="signed-in">
        <FirstPage />
      </Show>
    </>
  )
}

export default App