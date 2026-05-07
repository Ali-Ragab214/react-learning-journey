import { useStore } from "../store/useStore"


const SecondComponent = () => {
const count = useStore((state)=> state.count) // هتجيب ال count من ال store
    return(
        <>
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Counter App</h1>
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 mb-8 text-center">
                    <p className="text-white text-lg font-semibold mb-2">Current Count from second component</p>
                    <p className="text-5xl font-bold text-white">{count}</p>
                </div>
            </div>
        </div>

        </>
    )
}
export default SecondComponent