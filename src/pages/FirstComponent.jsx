import { useStore } from "../store/useStore"
import { Button } from "../components/ui/button"

const FirstComponent = () => {
//conume data from zustand store 
const count = useStore((state)=> state.count) // هتجيب ال count من ال store
const increment = useStore((state)=> state.increment) // هتجيب ال increment action من ال store
const decrement = useStore((state)=> state.decrement) // هتجيب ال decrement action من ال store
const reset = useStore((state)=> state.reset) // هتجيب ال reset action من ال store
const increaseByTen = useStore((state)=> state.increaseByTen) // هتجيب ال increaseByTen action من ال store
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Counter App</h1>
                
                {/* Count Display */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 mb-8 text-center">
                    <p className="text-white text-lg font-semibold mb-2">Current Count from first component</p>
                    <p className="text-5xl font-bold text-white">{count}</p>
                </div>

                {/* Buttons Grid */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Button 
                            onClick={increment}
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                            +1
                        </Button>
                        <Button 
                            onClick={decrement}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                            -1
                        </Button>
                    </div>

                    <Button 
                        onClick={increaseByTen}
                        className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        +10
                    </Button>

                    <Button 
                        onClick={reset}
                        className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all"
                    >
                        Reset
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default FirstComponent