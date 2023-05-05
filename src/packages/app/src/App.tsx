import React, { Suspense } from 'react'
import './App.css'
import { addNumbers } from '@test-workspaces/utils/src/myUtil'

const SubApp1 = React.lazy(
  () => import('@test-workspaces/subapp1/src/SubApp1Component'),
)
const SubApp2 = React.lazy(
  () => import('@test-workspaces/subapp2/src/SubApp2Component'),
)

function App() {
  const [tab, setTab] = React.useState<0 | 1 | 2>(0)

  function handleTabSelect(tab: 0 | 1 | 2) {
    setTab(tab)
  }

  return (
    <Suspense>
      <div className="App">
        <div>
          <button onClick={() => handleTabSelect(0)}>Home</button>
          <button onClick={() => handleTabSelect(1)}>SubApp 1</button>
          <button onClick={() => handleTabSelect(2)}>SubApp 2</button>
        </div>
        <div>
          {tab === 0 ? (
            <div>Welcome! 3+26={addNumbers(3, 26)}</div>
          ) : tab === 1 ? (
            <SubApp1 />
          ) : (
            <SubApp2 />
          )}
        </div>
      </div>
    </Suspense>
  )
}

export default App
