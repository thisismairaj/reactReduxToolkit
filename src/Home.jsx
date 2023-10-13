import HomeChild from "./HomeChild"

const Home = (props) => {
  const value = props.value
  return (
    <div>
      <h2>Home Value: {value}</h2>
      <HomeChild value={value} />
    </div>
  )
}
export default Home
