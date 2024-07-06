import { counterStore } from "./store/counterStore";

function App() {
  const count = counterStore((state) => state.count)
  const increaseCount = counterStore((state) => state.increaseCount)

  return (
    <section className="h-dvh flex flex-col items-center justify-center">
      <h1 className="text-xl font-normal mb-5">
        Edit the App.jsx file to see the magic ✨
      </h1>
      <button
        className="text-xl font-normal py-3 px-6 bg-gray-200 rounded-lg"
        onClick={increaseCount}
      >
        Counter : {count}
      </button>
    </section>
  )
}

export default App;