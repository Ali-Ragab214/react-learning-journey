import './App.css'
import FirstComponent from './pages/FirstComponent'
import SecondComponent from './pages/SecondComponent'

function App() {

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Zustand Store</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">First Component</h2>
            <FirstComponent/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Second Component</h2>
            <SecondComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
