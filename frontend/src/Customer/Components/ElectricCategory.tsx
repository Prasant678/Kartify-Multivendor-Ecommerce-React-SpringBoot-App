import ElectricCategoryCard from "./ElectricCategoryCard"

const ElectricCategory = () => {
  return (
    <div className="flex flex-wrap justify-between py-6 lg:px-35 border-b border-b-gray-800">
        {[1, 1, 1, 1, 1, 1, 1].map(() => <ElectricCategoryCard />)}
    </div>
  )
}

export default ElectricCategory
